const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getTeachers,
  createTeacher,
  deleteTeacher,
  updateTeachers
  
} = require("./teacher.controller");

// router.get("/", checkToken, getTeachers);
router.get("/", getTeachers);
router.post("/",checkToken, createTeacher);
router.delete("/", checkToken, deleteTeacher);
router.put("/", checkToken, updateTeachers);
module.exports = router;