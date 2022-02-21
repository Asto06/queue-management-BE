const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./configs/DB");
const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes/routes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.use("/user", routes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
