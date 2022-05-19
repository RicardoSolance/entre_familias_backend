const user_controller = require("../controllers/users_controllers");
const user_forum=require("../controllers/users_forum")
const routes = require("express").Router();

routes.get("/users", user_controller.getAllUsers);
routes.post("/users/create", user_controller.signUpUser);
routes.post("/users/login", user_controller.loginUser);
routes.put("/users/edit/:name", user_controller.updateUser);
routes.delete("/users/delete/:email",user_controller.deleteUser);

//Rutas para foro
// routes.get("/users/foro", user_forum);
routes.post("/users/foro/create", user_forum.createForum);
routes.put("users/foro/:comment", user_forum.updateForum);


module.exports = routes;