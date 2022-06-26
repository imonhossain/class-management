const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourses
  
} = require("./course.controller");

// router.get("/", checkToken, getCourses);
// router.get("/", getCourses);
// router.post("/",checkToken, createCourse);
router.get("/",checkToken, getCourses);
router.post("/",checkToken, createCourse);
router.delete("/", checkToken, deleteCourse);
router.put("/", checkToken, updateCourses);
module.exports = router;