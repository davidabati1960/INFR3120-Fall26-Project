const express = require('express');
const router = express.Router();

const Incident = require('../models/incident');

// Retrieve all saved incidents from MongoDB
router.get('/', async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ createdAt: -1 });

        res.status(200).json(incidents);
    } catch (error) {
        console.error('Incident retrieval failed:', error);

        res.status(500).json({
            message: 'Unable to retrieve incidents right now.'
        });
    }
});

module.exports = router;