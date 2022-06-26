const {
  getTeachers,
  create,
  deleteTeacher,
  updateTeacher
} = require("./teacher.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {

  getTeachers: (req, res) => {
    getTeachers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  createTeacher: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      // console.log("body controller", body)
      if (err) {
        console.log(err);
        return res.status(500).json({ 
          success: 0,
          message: "Database connection errror"
        });
      }
      // console.log("res",res); 
      // console.log("res body",res.body);
      // console.log("res data",res.data);
      
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },

  deleteTeacher: (req, res) => {
    const data = req.body;
    deleteTeacher(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "Teacher deleted successfully"
      });
    });
  },
  updateTeachers: (req, res) => {
    const body = req.body;
    console.log("update", body );
    updateTeacher(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  
  
};
