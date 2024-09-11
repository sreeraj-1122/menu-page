import express from 'express';
import Menu from '../models/Menu.js';

const router = express.Router();

// Get all menu items
router.get('/items', async (req, res) => {
  try {
    const items = await Menu.find(); 
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get menu items by category
router.get('/items', async (req, res) => {
  const { category } = req.query;
  try {
    const items = await Menu.find({ category: category }); 
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Post a new menu item
router.post('/items', async (req, res) => {
  const { name, price, category, description } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Name, price, and category are required' });
  }

  const newItem = new Menu({
    name,
    price,
    category,
    description,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
