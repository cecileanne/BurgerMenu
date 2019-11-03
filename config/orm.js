const connection = require("./connection");

module.exports = {
  selectAll: function(table, cb) {
    queryString = "SELECT * FROM ??";
    connection.query(queryString, table, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  // insertOne(),
  create: function(table, field1, field2, value1, value2, cb) {
    queryString = "INSERT INTO ?? (?, ?) VALUES (?, ?)";
    connection.query(
      queryString,
      table,
      field1,
      field2,
      value1,
      value2,
      function(err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  },

  // updateOne()
  updateOne: function(
    table,
    columnToUpdate,
    valueNew,
    conditionField,
    conditionValue,
    cb
  ) {
    queryString = "UPDATE ?? SET ?? = ? WHERE ? = ?";
    connection.query(
      queryString,
      table,
      columnToUpdate,
      valueNew,
      conditionField,
      conditionValue,
      function(err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  }
}; // closes module exports
