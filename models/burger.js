const orm = require("../config/orm.js");

var burgerORM = {
  	selectAll: function(response){
  		orm.selectAll(function(data){
  			response(data);
  		});
  	},
    insertOne: function(burger_name, response){
      orm.insertOne(burger_name, function(data){
        response(data);
      });
    },
    updateOne: function(id, response){
      orm.updateOne(id, function(data){
        response(data);
      });
    },
    deleteOne: function(id, response){
      orm.deleteOne(id, function(data){
        response(data);
      });
    }
}

module.exports = burgerORM;