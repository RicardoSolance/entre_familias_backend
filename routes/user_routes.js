const user_controller = require("../controllers/users_controllers");
const routes = require("express").Router();

routes.get("/users", user_controller.getAllUsers);

module.exports = routes;