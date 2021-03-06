const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

const app = express();

//Connect to Database
connectDB();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})