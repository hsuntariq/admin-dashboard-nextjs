import mongoose from "mongoose";

export const connectDB = async () => {
    const connection = {}
    try {

        if (connection.isConnected) return;
        const conn = await mongoose.connect('mongodb+srv://hsuntariq:hello123@cluster0.1eqdbuj.mongodb.net/?retryWrites=true&w=majority')
        connection.isConnected = conn.connections[0].readyState;
    } catch (error) {
        console.log(error)
    }
}