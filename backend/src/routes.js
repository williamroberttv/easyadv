const express = require("express");
const usersController = require("./controllers/usersController");
const sessionController = require("./controllers/sessionController");
const routes = express.Router();

routes.post("/session", sessionController.create);
routes.get("/cadastro", usersController.index);
routes.post("/cadastro", usersController.create);
module.exports = routes;
