const express = require("express");
const users = require("../controllers/User.controller");
const routes = express.Router();

routes.get("/", users.listUser);
routes.post("/create", users.createUser);
routes.put("/update", users.updateUser);
routes.delete("/delete", users.deleteUser);

module.exports = routes;
