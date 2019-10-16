// Reference the connection to the database
const connection = require("../config/connection");

// Create ORM to handle CRUD queries
const ORM = {
  // Create a burger
  createOne: (table, columns, values, data) => {
    let queryDB = (`INSERT INTO ${table} (${columns.toString()}) VALUES (${createQmarks(values.length)})`);

    console.log(queryDB);
    connection.query(queryDB, values, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

  // Select all burgers
  readAll: (table, data) => {
    let queryDB = (`SELECT * FROM ${table};`);
    console.log(queryDB);

    connection.query(queryDB, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

  // Update a burger
  updateOne: (table, objColVals, state, data) => {
    let queryDB = (`UPDATE ${table} SET ${translateSql(objColVals)} WHERE ${state};`);
    console.log(dbQuery);

    connection.query(queryDB,(err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  },

    // Delete a burger
  deleteOne: (table, state, data) => {
    let queryDB = (`DELETE FROM ${table} WHERE ${state};`);
    console.log(queryDB);

    connection.query(queryDB, (err, res) => {
      if (err) {
        throw err;
      }
      data(res);
    });
  }
};
module.exports = ORM;

