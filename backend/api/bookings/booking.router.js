const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getBookings,
  getRotines,
  createBooking,
  deleteBooking,
  updateBookings
  
} = require("./booking.controller");

// router.get("/", checkToken, getBookings);
router.get("/",checkToken, getBookings);
router.get("/routine", getRotines);
router.post("/",checkToken, createBooking);
router.delete("/", checkToken, deleteBooking);
router.put("/", checkToken, updateBookings);
module.exports = router;