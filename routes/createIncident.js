const express = require('express');
const router = express.Router();

//connecting this incident to the incident model
const Incident =require('../models/incident');

// creating operation for saving a new incident
router.post('/', async(req, res) => {
    const body = req.body || {};

    //checking type before passing  a value
    if (
        typeof body.title !== 'string' ||
        typeof body.category !== 'string' ||
        typeof body.description !== 'string' ||
        typeof body.severity !== 'string'
    ){
        return res.status(400).json({
            message: 'Please provide information in all four fields as text'
        });
    }

    try {
        const newIncident = await Incident.create({
            title: body.title,
            category: body.category,
            description: body.description,
            severity: body.severity,
            status: 'Open'
        });

        return res.status(201).json({
            message: 'Incident saved successfully',
            incident: newIncident
        }):
    } catch (error){
        //if mongoose rejects one or more fields
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(
                fieldError => fieldError.message
            );
            return res.status(400).json({
                message: messages.join(' ')
            });
        }

        console.error('Incident creation failed:', error.name);

        return res.status(500).json({
            message: 'Unable to save the incident right now.'
        });
    }
});
