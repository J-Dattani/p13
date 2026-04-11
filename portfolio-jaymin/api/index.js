const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jaymindattani141327_db_user:pixelpass123@pixelpass.pm2xuou.mongodb.net/portfolio?retryWrites=true&w=majority&appName=PixelPass';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes - handle both /api and root paths for Vercel
app.get(['/', '/api', '/api/'], (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// Get all contacts
app.get(['/contacts', '/api/contacts'], async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit contact form
app.post(['/contacts', '/api/contacts'], async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    
    res.status(201).json({ 
      message: 'Message sent successfully!',
      contact: newContact 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// For Vercel serverless
module.exports = app;

// Local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
