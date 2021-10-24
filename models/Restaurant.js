// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const Restaurant = mongoose.Schema({
    name: {
        type: String
    },
    // location: [{ type: String }],
    balance: {
        type: String
    },
    business_hours: {
        type: String
    },
    menu: [{ name: String, price: String }]
});

// export model
export default mongoose.model('Restaurants', Restaurant);