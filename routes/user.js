import express from "express";
import {
    getAllUsers
} from "../controllers/userController.js";

const router = express.Router();

// Route get All Users
router.get('/', getAllUsers)

export default router