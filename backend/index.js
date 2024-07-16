import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO;

if (!MONGO_URI) {
    console.error("MongoDB connection string is not defined in environment variables");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
