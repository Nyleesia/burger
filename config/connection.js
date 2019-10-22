// Get dependencies
const mysql = require("mysql");

// Instatiate connection and authentication for mySQL database
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
 }
 else {
  var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "burgersDB"
    });
}

// Connect to mySQL database or check for connection error(s)
connection.connect(function(err) {
    if (err) {
      console.error(`Error connecting: ${err.stack}`);
      return;
    }
  });

// Export connection
module.exports = connection;