const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getRooms,
  createRoom,
  deleteRoom,
  updateRooms
} = require("./room.controller");

// router.get("/", checkToken, getRooms);
// router.get("/", getRooms);
// router.post("/", createRoom);
router.get("/",checkToken, getRooms);
router.post("/",checkToken, createRoom);
router.delete("/", checkToken, deleteRoom);
router.put("/", checkToken, updateRooms);
module.exports = router;