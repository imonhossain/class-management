const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getAssigns,
  createAssign,
  deleteAssign,
  updateAssigns
  
} = require("./assign.controller");

// router.get("/", checkToken, getAssigns);
router.get("/",checkToken, getAssigns);
router.post("/",checkToken, createAssign);
router.delete("/", checkToken, deleteAssign);
router.put("/", checkToken, updateAssigns);
module.exports = router;