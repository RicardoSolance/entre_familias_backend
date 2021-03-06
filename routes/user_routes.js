const user_controller = require("../controllers/users_controllers");
const user_forum = require("../controllers/users_forum")
const entries_controller = require('../controllers/entries_controllers')
const routes = require("express").Router();
const tokenmiddleware=require("../middleware/tokenmiddleware")

routes.get("/users", user_controller.getAllUsers);
routes.post("/users/create", user_controller.signUpUser);
routes.post("/users/login", user_controller.loginUser);
routes.put("/users/edit/:name", user_controller.updateUser);
routes.delete("/users/delete/:email", user_controller.deleteUser);
routes.get("/users/profile/:email", user_controller.getUser);


//Rutas para foro

routes.post("/users/foro/create",tokenmiddleware, user_forum.createForum);
routes.put("/users/foro/:id",tokenmiddleware, user_forum.updateForum);
routes.get("/users/foro", user_forum.getForums);



//Rutas para dashbboard & blog
// routes.get("/dashboard", user_forum.createForum);
routes.get("/blog", entries_controller.getAllEntries);
routes.post('/dashboard/blog/create', entries_controller.createEntry)



module.exports = routes;