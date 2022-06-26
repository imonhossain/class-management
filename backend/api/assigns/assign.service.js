const pool = require("../../config/database");

module.exports = {
  getAssigns: callBack => {
    pool.query(
      `SELECT a.semister, a.assign_no , a.register_student , c.course_name,  c.course_no,t.teacher_no, t.name "teacher_name" from assigns a, courses c, teachers t where 
      a.course_no = c.course_no and a.teacher_no = t.teacher_no order by a.semister`,
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

    let totalStudents = data.register_student;
    let totalItaration = 0;
    let courseNo = data.course_no;
    let hours = 0;
    let semister = data.semister;
    let teacher_no = data.teacher_no;
    let matchRoomList = [];
    let availableSlot = [];
    let findResult = false;
    let counter = 0;
    let bookingRoomId = 0;
    let dayString = "";
    let bookingSlots = [];
    getHours();

    function assignMutation() {
      
      pool.query(
        `insert into assigns(semister, register_student, course_no, teacher_no) 
                  values(${data.semister},${data.register_student},${data.course_no},${data.teacher_no})`,
        (error, results) => {
          if (error) {
            callBack(error);
          }
          bookingMutation(results.insertId)
        }
      );
    }
    function bookingMutation(assignId) {
        pool.query(
            `insert into bookings(assign_no, room_no, day, startDate, endDate) 
                    values(?,?,?,?,?)`,
            [
                assignId,
                bookingRoomId,
                dayString,
                bookingSlots[0].start_time,
                bookingSlots[bookingSlots.length-1].end_time
            ],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                bookingSlotMutation(results.insertId);
            }
        );
    }

    function bookingSlotMutation(bookingId) {
        const queryValueString = bookingSlots.length>1 ? "values (?, ?), (?, ?)" : "values(?, ?)";
        const queryData = bookingSlots.length > 1 ? [bookingId, bookingSlots[0].id, bookingId, bookingSlots[1].id] : [bookingId, bookingSlots[0].id];
        pool.query(
            `insert into booking_slots(booking_id, time_slot_id) ${queryValueString}`,
            queryData,
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                pool.query(
                    `SELECT * from bookings WHERE booking_no =${bookingId}`,
                    (error, results) => {
                        if (error) {
                            callBack(error);
                        }
                        return callBack(null, results[0]);
                    }
                );
            }
        );
    }
    function getHours() {
        pool.query(
            `SELECT course_credit, CASE WHEN course_credit > 2 THEN 2 ELSE 1 END AS hours from courses WHERE course_no = ?`,
            [courseNo],
            (error, results) => {
                console.log("hours results", results);
                if (error) {
                    callBack(error);
                }
                hours = results[0].hours;
                getRooms();
            }
        );
    }

    function getRooms() {
        pool.query(
            `SELECT * from rooms where capacity >= ?`,
            [totalStudents],
            (error, results) => {
                // console.log("room list results", results);
                if (error) {
                    callBack(error);
                }
                matchRoomList = results;
                console.log("matchRoomList", matchRoomList);
                getAvailableSlots();
            }
        );
    }

    function getAvailableSlots() {

        let slot1 = [];
        let slot2 = [];
        let slot3 = [];
        console.log("matchRoomList---", matchRoomList);
        let element = matchRoomList[counter];
        bookingRoomId = element.room_no;
        console.log("log ", counter);
        counter++;
        pool.query(
            `SELECT * FROM time_slots WHERE id NOT IN (SELECT ts.id FROM assigns a INNER JOIN bookings b ON b.assign_no = a.assign_no INNER JOIN booking_slots bs on bs.booking_id=b.booking_no INNER JOIN time_slots ts ON bs.time_slot_id=ts.id WHERE a.teacher_no = ? AND semister=?) AND id NOT IN (SELECT ts.id FROM rooms r INNER JOIN bookings b ON b.room_no = r.room_no INNER JOIN booking_slots bs on bs.booking_id=b.booking_no INNER JOIN time_slots ts ON bs.time_slot_id=ts.id WHERE r.room_no = ?)`,
            [teacher_no, semister, bookingRoomId],
            (error, results) => {
                // console.log("room list results", results);
                if (error) {
                    callBack(error);
                } else {
                    availableSlot = results;
                    console.log("log await ", availableSlot.length);
                    // console.log("availableSlot", availableSlot);
                    if(availableSlot.length){
                        slot1 = availableSlot.filter(element=> element.day_group == 1);
                        slot2 = availableSlot.filter(element=> element.day_group == 2);
                        slot3 = availableSlot.filter(element=> element.day_group == 3);
                        // console.log("solt1", solt1)
                        // console.log("solt2", solt2)
                        // console.log("solt3", solt3)
                        if(slot1.length >= hours || slot2.length  >= hours || slot3.length >= hours){
                            findResult = true;
                            assignCourse({slot1, slot2, slot3});
                            console.log("log findResult", findResult)
                        }
                    }
                    if(counter<matchRoomList.length &&  !findResult) {
                        getAvailableSlots();
                    }
                }
            }
        );
    }
    function assignCourse(slots) {
        let index = '';
        if(slots.slot1.length >= hours) {
            dayString = "Friday";
            index = 'slot1';
        } else if(slots.slot2.length >= hours) {
            dayString = "Friday";
            index = 'slot2';
        } else {
            dayString = "Saturday";
            index = 'slot3';
        }

        bookingSlots = slots[index].slice(0, hours)
        assignMutation();
    }
  },

  deleteAssign: (data, callBack) => {
    console.log("delete data", data);
    pool.query( 
      `delete from assigns where assign_no = ?`,
      [data.assign_no],
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
  updateAssign: (data, callBack) => {
    console.log("update assigns data ", data);
    pool.query(
      `update assigns set semister=?, register_student=?, course_no=?, teacher_no=?, section=? where assign_no = ?`,
      [
        data.semister,
        data.register_student,
        data.course_no,
        data.teacher_no,
        data.section,
        data.assign_no
      ],
      (error, results) => {
        console.log("update assigns ", results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};
