// Reference the ORM as an imported dependency
const ORM = require("../config/orm.js");


// Create a query constructor to use the orm to query the database
let burger = {
// Create a burger order
  createOne: function(columns, values, data) {
    ORM.createOne("burgers", columns, values, function (res) {
      data(res);
    });
  },

// Read all burgers
  readAll: function(data) {
    ORM.readAll("burgers", function (res) {
      data(res);
    });
  },

// Update a burger
  updateOne: function(colValObjects, state, data) {
    ORM.updateOne("burgers", colValObjects, state, function(res) {
      data(res);
    });
  },

  // Delete a burger
  deleteOne: function(state, data) {
    ORM.deleteOne("burgers", state, function(res) {
      data(res);
    });
  }
};

// Export queries
module.exports = burger;