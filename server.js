const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

const port = 3000;

//TODO
app.get("/musicians/:id", (req, res) => {
  const id = req.params.id;
  Musician.findByPk(id)
    .then((musician) => {
      res.json(musician);
    })
    .catch((error) => {
      // handle error
    });
});

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
