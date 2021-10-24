import express from "express";
import {
    getAllRestaurants,
    getRestaurantById,
    saveRestaurant
} from "../controllers/restaurantController.js";

// express router
const router = express.Router();

// Route get All Restaurants
router.get('/', getAllRestaurants);
// Route get single Restaurant
router.get('/:id', getRestaurantById);
// Route CREATE Restaurant
router.post('/', saveRestaurant);

// export router
export default router;