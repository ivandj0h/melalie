// import the models
import User from "../models/user.js";


// get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().limit(10)

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Get Total Transaction
export const getTotalTransaction = async (req, res) => {
    try {
        const topTenUserTransaction = await User.aggregate([
            {
                "$project": {
                    "name": 1,
                    "balance": 1,
                    "TotalTransactions": {
                        "$sum": { $toDecimal: { "$purchases": { "$amount": 1 } } }
                    }
                }
            }
        ])

        console.log(topTenUserTransaction);

        res.status(200).json(topTenUserTransaction)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
