const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
};
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.1puqu.mongodb.net/${process.env.MONGO_POST_COLLECTION}?retryWrites=true&w=majority`;
const mongoConnection = mongoose
    .connect(uri, connectionParams)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

module.exports = mongoConnection;