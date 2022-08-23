const pool = require("../../config/database");

module.exports = {
  getCourses: callBack => {
    pool.query(
      `select course_id, course_name, course_credit, course_code, semester from courses`,
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
      `insert into courses(course_name, course_credit, course_code, semester) 
                values(?,?,?,?)`, 
      [
        data.course_name,
        data.course_credit,
        data.course_code,
        data.semester,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        pool.query(
          `select * from courses where course_id =${results.insertId}`,
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

        //return callBack(null, results);
      }
    );
  },
  deleteCourse: (data, callBack) => {
    console.log("delete data", data);
    pool.query( 
      `delete from courses where course_id = ?`,
      [data.course_id],
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
  updateCourse: (data, callBack) => {
    console.log("update courses data ", data);
    pool.query(
      `update courses set course_name=?, course_credit=?, course_code=?, semester=? where course_id = ?`,
      [
        data.course_name,
        data.course_credit,
        data.course_code,
        data.semester,
        data.course_id
      ],
      (error, results) => {
        console.log("update courses ", results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },



};
