const orm = require("../config/orm");

module.exports = {
  getAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  }

  // create(),
  // update()
};
