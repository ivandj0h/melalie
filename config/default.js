import dotenv from "dotenv";
dotenv.config()


export const connect = {
    applicationUri: process.env.APP_URI,
    applicationPort: process.env.APP_PORT || 5000,
    databaseUri: process.env.DB_URI,
    environment: process.env.NODE_ENV
}

export const mongoRules = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}