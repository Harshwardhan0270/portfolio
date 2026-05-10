const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── CORS CONFIGURATION ────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://harshward.netlify.app',
  'https://harshwardhan0270.github.io',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Instead of throwing an error, we return false to handle CORS gracefully
      callback(null, false);
    }
  },
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));

// ── RATE LIMITING ─────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                   // Limit each IP to 5 requests per window
  message: { error: 'Too many messages sent. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── HELPERS ──────────────────────────────────────────────────────────────────
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ── ROUTES ────────────────────────────────────────────────────────────────────

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main Contact Route
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message is too short (min 10 chars).' });
  }

  // 2. Check for Environment Variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('CRITICAL: SMTP credentials missing in Render/Env variables.');
    return res.status(500).json({ error: 'Server configuration error. Please try later.' });
  }

  // 3. Setup Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Helps avoid some connection issues with Gmail
    },
  });

  // 4. Email Content
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} — Portfolio`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #4A90E2;">New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  };

  // 5. Send the Email
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Success: Email sent from ${email}`);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// ── ERROR HANDLING ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── SERVER START ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});