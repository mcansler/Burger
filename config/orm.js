// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = { 
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  
    insertOne: function(tableInput, val, cb) {
      var queryString = 'INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');";
      console.log(queryString); 
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }, 
      
          
    updateOne: function(tableInput, condition, cb){
        var queryString = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
  };
  

// Export the orm object for the model (burger.js).
module.exports = orm;