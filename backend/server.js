const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── CORS ──────────────────────────────────────────────────────────────────────
// Allow both local dev and production origins
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://harshward.netlify.app',
  'https://harshwardhan0270.github.io',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));

// ── RATE LIMITING ─────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                    // max 5 submissions per IP per window
  message: { error: 'Too many messages sent. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── INPUT VALIDATION ──────────────────────────────────────────────────────────
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ── HEALTH CHECK ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── POST /api/contact ─────────────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }
  if (name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  // Guard: require SMTP credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('SMTP credentials not configured');
    return res.status(500).json({ error: 'Server email configuration is missing.' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name.trim()} — Portfolio`,
    text: [
      `You have a new contact form submission.`,
      ``,
      `Name:    ${name.trim()}`,
      `Email:   ${email.trim()}`,
      `Message:`,
      message.trim(),
    ].join('\n'),
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;background:#0f0f13;color:#e2e2e9;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.07)">
        <h2 style="color:#818cf8;margin:0 0 24px">New Portfolio Message</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:80px">Name</td><td style="padding:8px 0;font-weight:600">${name.trim()}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${email.trim()}" style="color:#818cf8">${email.trim()}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:20px 0"/>
        <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p>
        <p style="margin:0;line-height:1.7;white-space:pre-wrap">${message.trim()}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Contact email sent from ${email}`);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`SMTP user: ${process.env.EMAIL_USER || '(not set)'}`);
});
