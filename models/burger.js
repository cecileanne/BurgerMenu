const orm = require("../config/orm");

module.exports = {
  // show all burgers
  getAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },
  // create a new uneaten burger,
  cookNew: function(cb) {
    orm.create(
      "burgers",
      "burgerStyle",
      "devoured",
      req.body.burger,
      "0",
      function(data) {
        cb(data);
      }
    );
  },
  // move a burger to the devour area
  devourOne: function(cb) {
    orm.updateOne("burgers", "devoured", "1", "id", req.params.id, function(
      data
    ) {
      cb(data);
    });
  }
}; // closes module
