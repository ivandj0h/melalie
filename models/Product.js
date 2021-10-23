// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const MenuSchema = new mongoose.Schema({ name: String, price: String });
const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    business_hours: {
        type: String,
    },
    menu: [MenuSchema]
});

// export model
export default mongoose.model('Products', Product);