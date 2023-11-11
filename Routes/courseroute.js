const express = require('express');
const CourseController = require('../controllers/courseController');
const AuthController = require('../controllers/authcontroller');
const route = express.Router();




route.get("/",AuthController.protected,CourseController.gett);

route.get("/:id", AuthController.protected, CourseController.getById);


route.post("/", CourseController.add);
route.delete("/:id", CourseController.del);

route.put("/:id", CourseController.edit);

module.exports = route; 