const express = require('express');
const Item = require('../models/Item');
const router = express.Router();


const { getItems } = require('../controllers/itemController'); // Adjust path as needed

router.get('/items', getItems);

// Search items by name
router.get('/items/search', async (req, res) => {
    const { query } = req.query;
    const items = await Item.find({ name: { $regex: query, $options: 'i' } });
    res.json(items);
});

module.exports = router;
