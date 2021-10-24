import express from "express";
import {
    getAllUsers,
    getTotalTransaction
} from "../controllers/userController.js";

const router = express.Router();

// Route get All Users
router.get('/', getAllUsers)

// Route get All Restaurants
router.get('/total-transaction', getTotalTransaction);




export default router