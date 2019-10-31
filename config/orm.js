require("connection").config();

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgerMenu_db;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { burgers: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query(
    "INSERT INTO burgers (burger) VALUES (?)",
    [req.body.task],
    function(err, result) {
      if (err) throw err;

      res.redirect("/");
    }
  );
});
