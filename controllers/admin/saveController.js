const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const saveController = (req, res) => {
  //preuzeti podatke
  let firstName = req.body.first_name; // first name je iz name atributa
  let lastName = req.body.last_name;
  let password = req.body.password;
  let role = req.body.role;
  // ubaaciti korisnika u bazu podataka
  db.users.insert(
    {
      first_name: firstName,
      last_name: lastName,
      password: password,
      role: role,
    },
    (err, docs) => {
      if (err) {
        //display err page
      } else {
        res.redirect("/admin");
      }
    }
  );
};

module.exports = saveController;
