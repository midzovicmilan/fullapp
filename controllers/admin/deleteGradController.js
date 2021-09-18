const mongojs = require("mongojs");
const db = mongojs("fullapp", ["gradovi"]);

const deleteGradController = (req, res) => {
  let gradId = req.params.gradId;

  db.gradovi.remove({ _id: mongojs.ObjectID(gradId) }, (er, docs) => {
    res.send("Ok");
  });
};

module.exports = deleteGradController;
