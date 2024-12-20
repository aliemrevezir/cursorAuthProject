const mongoose = require('mongoose');

async function testConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/auth_db');
        console.log('MongoDB connected successfully');
        process.exit(0);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

testConnection();