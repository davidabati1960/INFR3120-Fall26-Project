const mongoose = require('mongoose');

async function connectDatabase() {
    const connectionString = process.env.MONGODB_URL;
     
    if (!connectionString) {
        throw new Error('MONOGODB_URL is missing from config/.env')
    }
    await mongoose.connect(connectionString,{
        dbName:'cybertrack',
        serverSelectionTimeoutMS: 10000
    });
    console.log('Connected to MongoDB Atlas; cybertrack');
}
module.exports = connectDatabase;