const router = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//GET request
router.get("/api/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//POST request
router.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newData = {
      notetitle,
      notetext,
    };
    readAndAppend(newData, "./db/db.json");

    const response = {
      status: "success",
      body: newData,
    };

    res.json(response);
 } else {
    res.json("Error in posting note");
  
  }
});

module.exports = router;
