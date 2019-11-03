const burger = require("./models/burger");

module.exports = function(app) {
  // Root get route
  app.get("/", function(req, res) {
    burger.getAll(function(data) {
      res.render("index", { burgers: data });
    });
  });

  // adds new burger
  app.post("/api", function(req, res) {
    burger.cookNew(req.body.name, function(data) {
      //   res.render("index", { burgers: data });
      res.json(data);
      res.redirect("/");
    });
  });

  // moves burgers to the devoured column
  app.put("/api/:id", function(req, res) {
    burger.devourOne(req.params.id, function(data) {
      res.json(data);
      // res.redirect("/");
    });
  });
}; // closes module exports
