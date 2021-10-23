import dotenv from "dotenv";
dotenv.config()


export const connect = {
    applicationUri: process.env.APP_URI,
    applicationPort: process.env.APP_PORT,
    databaseUri: process.env.DB_URI
}

export const mongoRules = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}