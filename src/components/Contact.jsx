// Contact.jsx
import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [statusMessage, setStatusMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');
    try {
      const response = await fetch('https://portfolio-1-ehqi.onrender.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});


      if (response.ok) {
        setStatusMessage('Enquiry sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setStatusMessage(data.error || 'Failed to send enquiry.');
      }
    } catch (error) {
      setStatusMessage('Failed to send enquiry.');
    }
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 md:px-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:space-x-12">
        <form onSubmit={handleSubmit} className="flex-1 mb-8 md:mb-0 space-y-4">
          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <textarea name="message" placeholder="Message" rows="4" required value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Submit</button>
          {statusMessage && <p className="mt-2 text-sm">{statusMessage}</p>}
        </form>
        <div className="flex-1 text-center md:text-left">
          <p>Email: <a href="mailto:harshwardhan0270@gmail.com" className="text-blue-600">harshwardhan0270@gmail.com</a></p>
          <p>Phone: +91 9009571862</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/harshwardhan-sahu-51a673212/" className="text-blue-600">Profile</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
