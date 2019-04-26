
// Node Dependency
const orm = require('../config/orm');


// ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function (callback) {
    orm.selectAll(function (res) {
      callback(res);
    });
  },

  insertOne: function (burger_name, callback) {
    orm.insertOne(burger_name, function (res) {
      callback(res);
    });
  },

  updateOne: function (burger_id, callback) {
    orm.updateOne(burger_id, function (res) {
      callback(res);
    });
  }

};


// Export 
module.exports = burger;