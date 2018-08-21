//importing the ORM to create the functions that will interact with the database
var orm = require('../config/orm.js');

//Create the burger object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(name, cb) {
        orm.insertOne("burgers", name, cb, function(res) {
            cb(res);
        });
    },
  
    updateOne: function(id, cb) {
        orm.updateOne("burgers", id, cb, function(res) {
            cb(res);
        });
    }
    
  
  
};

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;