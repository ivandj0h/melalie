// import models
import Restaurant from "../models/Restaurant";

// get All Restaurants
export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}