// import models
import Restaurant from "../models/restaurant.js";

// get All Restaurants
export const getAllRestaurants = async (req, res) => {
    try {

        const restaurants = await Restaurant.find().limit(10)

        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function get All Restaurant that are open at a certain Datetime
export const getAllRestaurantsBySearch = async (req, res) => {
    try {
        const filterSearch = req.body

        const restaurants = await Restaurant.find({
            $text: {
                $search: filterSearch.business_hours
            }
        }).limit(10)
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function List all restaurants within the vicinity of the user’s location
export const getNearByRestaurants = async (req, res) => {
    try {
        const lat = req.body.lat
        const lng = req.body.lng

        const restaurant = await Restaurant.find();
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

// function get All Restaurant that are open at a certain Datetime
export const getAllRestaurantsByOpenHours = async (req, res) => {
    try {
        const filterSearch = req.body

        const restaurants = await Restaurant.find({}, { name: 1, business_hours: 1 }).limit(10)
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function get All Restaurant that are open at a certain Datetime
export const getAllRestaurantsByNumberOfDishes = async (req, res) => {
    try {

        const restaurants = await Restaurant.find({}, { name: 1, business_hours: 1 }).limit(10)
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


// function Search for restaurants name
export const searchRestaurantsByDishesOrName = async (req, res) => {
    try {
        const filterSearch = req.body
        await Restaurant.find(filterSearch, function (err, data) {
            if (err) return res.status(500).json({ error: unknownError });
            else if (data) return res.status(200).json({ data });
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function Search for restaurants that has a dish matching search term
export const searchRestaurantsMatchingSearchTerm = async (req, res) => {
    try {
        const filterSearch = req.body.name
        const restaurants = await Restaurant.find({
            menu: {
                $elemMatch: {
                    name: filterSearch
                }
            }
        })
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
