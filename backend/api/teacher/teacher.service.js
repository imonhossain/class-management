const pool = require("../../config/database");

module.exports = {
  getTeachers: callBack => {
    pool.query(
      `select teacher_id, name, phone, email from teachers`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  create: (data, callBack) => {
    pool.query(
      `insert into teachers(name, phone, email) 
                values(?,?,?)`,
      [
        data.name,
        data.phone,
        data.email
      ],
      (error, results) => {
        console.log("result --- ", results);
        console.log("error --- ", error); 
      // console.log("body", fields);
        if (error) {
          callBack(error);
        }
        pool.query(
          `select * from teachers where teacher_id =${results.insertId}`,
          (error, results) => {
            console.log("result --- ", results);
            console.log("error --- ", error); 
          // console.log("body", fields);
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );


        // return callBack(null, results);
      }
    );

   



  },

  deleteTeacher: (data, callBack) => {
    console.log("delete data", data);
    pool.query( 
      `delete from teachers where teacher_id = ?`,
      [data.teacher_id],
      (error, results) => {
        console.log("delete results", results); 
        if (error) {
          callBack(error);
        }
        if(results.affectedRows){
          return callBack(null, results);
        }
        return callBack(null, null);
      }
    );
  },
  updateTeacher: (data, callBack) => {
    console.log("update teachers data ", data);
    pool.query(
      `update teachers set name=?, phone=?, email=? where teacher_id = ?`,
      [
        data.name,
        data.phone,
        data.email,
        data.teacher_id
      ],
      (error, results) => {
        console.log("update teachers ", results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};
