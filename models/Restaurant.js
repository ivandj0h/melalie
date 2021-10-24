// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const MenuSchema = new mongoose.Schema({ name: String, price: String });
const LocSchema = new mongoose.Schema([])
const Restaurant = mongoose.Schema({
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
    business_hours: {
        type: String
    },
    menu: [MenuSchema]
});

// export model
export default mongoose.model('Restaurants', Restaurant);