const mongoose = require('mongoose');
const incidentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required.'],
            trim: true,
            minlength: [5, 'Title must contain at least 5 characters.'],
            maxlength: [100, 'Title annot exceed 100 characters.']
        },
        category: {
            type: String,
            required: [true, 'Category is required.'],
            enum: {
                values:["Unauthorized Access",
                    "Phishing",
                    "Malware",
                    "Data Exposure",
                    "Other"],
                message:'Select a valid category.'
            }
        },
        description: {
            type: String,
            required: [true, 'Description is required.'],
            trim: true,
            minlength: [10, 'Description must contain at least 10 characters.'],
            maxlength: [2000, 'Description cannot exceed 2000 characters.']
        },
        severity: {
            type: String,
            required: [true, 'Severity is required.'],
            enum: {
                values:['Low','Medium','High'],
                message: 'Select a valid severity.'
            }
        },
        status: {
            type: String,
            required: true,
            default: 'Open'
        }},
        {
            timestamps: true,
            collection: 'incidents'
        }
);
module.exports=mongoose.model('Incident', incidentSchema);
