import mongoose from "mongoose";


const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    }
})

const electronicsModel = mongoose.model('Electronics', electronicsSchema)


export default electronicsModel; 