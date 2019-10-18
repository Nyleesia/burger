// Reference the connection as an imported dependency
const connection = require("../config/connection");


// Helper functions for ORM queries
function createQuestionMarks(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
};

function objToSQL(object) {
  var array = [];

  for (var key in object) {
    let value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      array.push(`${key} = ${object[key]}`);
    }
  }
  return array.toString();
};


// Create ORM to handle CRUD queries
const ORM = {
  // Create a burger order
  createOne: function (table, columns, values, data) {
    let queryDB = (`INSERT INTO ${table} (${columns.toString()}) VALUES (${createQuestionMarks(values.length)})`);
    console.log(queryDB);

    connection.query(queryDB, values, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

  // Select all burgers
  readAll: function (table, data) {
    let queryDB = (`SELECT * FROM ${table}`);
    console.log(queryDB);

    connection.query(queryDB, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

  // Update a burger
  updateOne: function (table, colValObjects, state, data){
    let queryDB = (`UPDATE ${table} SET ${objToSQL(colValObjects)} WHERE ${state}`);
    console.log(queryDB);

    connection.query(queryDB,(err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

  // Delete a burger
  deleteOne: function (table, state, data) {
    let queryDB = (`DELETE FROM ${table} WHERE ${state}`);
    console.log(queryDB);

    connection.query(queryDB, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  }
};

// Export ORM
module.exports = ORM;

