// import mongoose
import { mongoose } from "mongoose";

// Buat Schema
const PurchaseSchema = new mongoose.Schema({
    dish: String,
    restaurant_name: String,
    amount: String,
    date: Date
})
const User = mongoose.Schema({
    name: {
        type: String
    },
    location: [
        {
            type: String
        }
    ],
    balance: {
        type: String
    },
    purchases: [PurchaseSchema]
})

// export model
export default mongoose.model('Users', User)