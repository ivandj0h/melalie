// import models
import Restaurant from "../models/Restaurant.js";

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


// function get single Restaurant
export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}


// function Create Restaurant
export const saveRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        const savedRestaurant = await restaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}