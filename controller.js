const burger = require("./models/burger");

module.exports = function(app) {
  // Root get route
  app.get("/", function(req, res) {
    burger.getAll(function(data) {
      res.render("index", { burgers: data });
    });
  });

  // Post route -> back to home
  app.post("/api", function(req, res) {
    connection.query(
      "INSERT INTO burgers (burger) VALUES (?)",
      [req.body.task],
      function(err, result) {
        if (err) throw err;

        res.redirect("/");
      }
    );
  });

  // TO DO Post route -> devour select
  app.post("/api/:id"),
    function(req, res) {
      // TO DO CONNECTION QUERY
      console.log(req.params.id);
    };
}; // closes module exports
