const Item = require('../models/Item');

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch items' });
    }
};

// 