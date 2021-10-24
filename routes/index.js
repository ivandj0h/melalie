import express from "express";

// express router
const router = express.Router();

// Route get Frontpage
router.get('/', (req, res) => {
    res.status(200).json({
        message: "welcome"
    })
});

// export router
export default router;

