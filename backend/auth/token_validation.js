const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    // console.log("body", req.body);
    // console.log("header ", req.header);
     let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      // console.log("token", token);
      // jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      jwt.verify(token, 'qwe1234', (err, decoded) => {
        console.log("error ", err);
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};
