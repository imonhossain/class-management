const pool = require("../../config/database");

module.exports = {
  getRooms: callBack => {
    pool.query(
      `select room_id, number, capacity from rooms`,
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
      `insert into rooms(number, capacity) 
                values(?,?)`,
      [
        data.number,
        data.capacity,
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        pool.query(
          `select * from rooms where room_id =${results.insertId}`,
          (error, results) => {
            // console.log("result --- ", results);
            // console.log("error --- ", error); 
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

  deleteRoom: (data, callBack) => {
    console.log("delete data", data);
    pool.query( 
      `delete from rooms where room_id = ?`,
      [data.room_id],
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
  updateRoom: (data, callBack) => {
    console.log("update rooms data ", data);
    pool.query(
      `update rooms set number=?, capacity=? where room_id = ?`,
      [
        data.number,
        data.capacity,
        data.room_id
      ],
      (error, results) => {
        console.log("update rooms ", results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
