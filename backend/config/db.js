import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sreeraj2122:8078382787@cluster0.yi6udbc.mongodb.net/food-del').then(() => {
            console.log('Database connected');
        })
    } catch (error) {
    console.error('MongoDB connection error:', error);
        
    }
}   