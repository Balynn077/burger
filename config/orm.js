const connection = require("./connection.js");

var orm = {
  selectAll: function(response) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  },
  insertOne: function(burger, response) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger, false], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  updateOne: function(id, response) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    connection.query(queryString, [{ devoured: true }, { id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  deleteOne: function(id, response) {
    var queryString = "DELETE FROM burgers WHERE ?";
    connection.query(queryString, [{ id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }

};

module.exports = orm;