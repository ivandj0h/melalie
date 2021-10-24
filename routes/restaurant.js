import express from "express";
import {
    getAllRestaurants,
    getAllRestaurantsBySearch,
    getNearByRestaurants,
    getAllRestaurantsByOpenHours,
    getAllRestaurantsByNumberOfDishes,
    getRestaurantById
} from "../controllers/restaurantController.js";

// express router
const router = express.Router();

// Route get All Restaurants
router.get('/', getAllRestaurants);

// Route get All Restaurants that are open at a certain Datetime
router.post('/', getAllRestaurantsBySearch);

// Route get All Restaurants based on open hours 
router.get('/open', getAllRestaurantsByOpenHours);

// Route get All Restaurants that have x-z number of dishes within a price range
router.get('/dishes', getAllRestaurantsByNumberOfDishes);

// Route get single Restaurant
router.get('/:id', getRestaurantById);

// export router
export default router;