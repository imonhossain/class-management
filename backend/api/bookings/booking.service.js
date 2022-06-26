const pool = require("../../config/database");

module.exports = {
  getRotines: callBack => {
    pool.query(
      `select r.number, r.capacity, b.booking_no, b.day, b.startDate, b.endDate, c.course_name, c.course_no, t.teacher_no,a.semister, a.assign_no, a.register_student , t.name "teacher_name" from rooms r, bookings b, assigns a, teachers t , courses c WHERE b.assign_no = a.assign_no and a.course_no = c.course_no and a.teacher_no = t.teacher_no and b.room_no = r.room_no and b.day = "friday"`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error); 
        }  
        return callBack(null, results); 
      }
    ); 
  },
  getRotinesSatureay: callBack => {
    pool.query(
      `select r.number, r.capacity, b.booking_no, b.day, b.startDate, b.endDate, c.course_name, c.course_no, t.teacher_no,a.semister, a.assign_no, a.register_student , t.name "teacher_name" from rooms r, bookings b, assigns a, teachers t , courses c WHERE b.assign_no = a.assign_no and a.course_no = c.course_no and a.teacher_no = t.teacher_no and b.room_no = r.room_no and b.day = "saturday"`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error); 
        }  
        return callBack(null, results); 
      }
    ); 
  },
  // select r.number, group_concat(b.startdate), group_concat(b.enddate) from bookings b , rooms r group by r.number

  getBookings: callBack => {
    pool.query(
      `SELECT b.booking_no, b.startDate, b.endDate, b.day, r.number "room_number", a.semister, a.assign_no, a.register_student , c.course_name, c.course_no, t.teacher_no, t.name "teacher_name" from bookings b, assigns a, courses c, rooms r, teachers t where b.assign_no = a.assign_no and a.course_no = c.course_no and a.teacher_no = t.teacher_no and b.room_no = r.room_no`,
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
    console.log("asign data", data);
    console.log("startDate type data", typeof(data.startDate));
    console.log("endDate type data", typeof(data.endDate));
    pool.query(
      `insert into bookings(assign_no, room_no, day, startDate, endDate) 
                values(?,?,?,?,?)`,
      [
        data.assign_no, 
        data.room_no,  
        data.day,
        data.startDate, 
        data.endDate
      ],
      (error, results) => {
        console.log("result --- ", results);
        console.log("error --- ", error); 
      // console.log("body", fields);

        if (error) {
          callBack(error);
        }
        pool.query(
          `SELECT * from bookings WHERE booking_no =${results.insertId}`,
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

  deleteBooking: (data, callBack) => {
    console.log("delete data", data);
    pool.query( 
      `delete from bookings where booking_no = ?`,
      [data.booking_no],
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
  updateBooking: (data, callBack) => {
    console.log("update bookings data ", data);
    pool.query(
      `update bookings set semister=?, register_student=?, course_no=?, teacher_no=?, section=? where booking_no = ?`,
      [
        data.semister,
        data.register_student,
        data.course_no,
        data.teacher_no,
        data.section,
        data.booking_no
      ],
      (error, results) => {
        console.log("update bookings ", results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};
