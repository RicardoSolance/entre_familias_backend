const user_controller = require("../controllers/users_controllers");
const routes = require("express").Router();

routes.get("/users", user_controller.getAllUsers);
routes.post("/users/create", user_controller.signUpUser);
routes.post("users/login", user_controller.loginUser);
routes.put("users/edit/:name", user_controller.updateUser);
routes.delete("users/delete/:email",user_controller.deleteUser);

module.exports = routes;