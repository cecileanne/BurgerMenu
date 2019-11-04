const orm = require("../config/orm");

module.exports = {
  // show all burgers
  getAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },
  // create a new uneaten burger,
  cookNew: function(burgerName, cb) {
    orm.create("burgers", "burgerStyle", "devoured", burgerName, 0, function(
      data
    ) {
      cb(data);
    });
  },
  // move a burger to the devour area
  devourOne: function(id, cb) {
    orm.updateOne("burgers", "devoured", 1, "id", id, function(data) {
      cb(data);
    });
  }
}; // closes module
