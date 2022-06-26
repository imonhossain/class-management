require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')
const userRouter = require("./api/users/user.router");
const courseRouter = require("./api/courses/course.router");
const teacherRouter = require("./api/teacher/teacher.router");
const roomRouter = require("./api/rooms/room.router");
const assignRouter = require("./api/assigns/assign.router");
const bookingRouter = require("./api/bookings/booking.router");
app.use(cors())
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/assigns", assignRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/bookings", bookingRouter);
const port = 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
}); 
