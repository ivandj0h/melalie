// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const MenuSchema = new mongoose.Schema({ name: String, price: String });
const Restaurant = mongoose.Schema({
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
        required: true
    },
    menu: [MenuSchema]
    // },
    //     { typeKey: '$type' }
});
// Restaurant.index({ business_hours: "text" });

// export model
export default mongoose.model('Restaurants', Restaurant);