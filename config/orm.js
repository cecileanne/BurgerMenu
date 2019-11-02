const connection = require("./connection");

module.exports = {
  selectAll: function(table, cb) {
    connection.query(`SELECT * FROM ${table}`, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
  // insertOne(),

  // updateOne()
};
