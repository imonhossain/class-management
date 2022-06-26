const {
  getAssigns,
  create,
  deleteAssign,
  updateAssign
} = require("./assign.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {

  getAssigns: (req, res) => {
    getAssigns((err, results) => {
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
  createAssign: (req, res) => {
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

  deleteAssign: (req, res) => {
    const data = req.body;
    deleteAssign(data, (err, results) => {
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
        message: "Assign deleted successfully"
      });
    });
  },
  updateAssigns: (req, res) => {
    const body = req.body;
    console.log("update", body );
    updateAssign(body, (err, results) => {
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
