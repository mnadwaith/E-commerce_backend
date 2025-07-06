import mongoose from 'mongoose'


export async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error.message)
    }
}