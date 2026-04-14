const path = require("path");

const express = require("express");
const  hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");
const homeController = require("../controllers/home"); 

 hostRouter.get("/host/add-home", homeController.homeController);

 hostRouter.post("/host/add-home", homeController.addHomeController);

module.exports = hostRouter;