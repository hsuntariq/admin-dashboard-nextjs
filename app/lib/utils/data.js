import { connectDB } from "./connection";
import { User } from "./models"

export const fetchData = async (query) => {
    const regex = new RegExp(query, 'i')

    try {
        connectDB()
        const users = await User.find({ username: { $regex: regex } });
        return users


    } catch (error) {
        console.log(error)
    }
}