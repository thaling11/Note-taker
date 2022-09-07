const router = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

//GET request
router.get("/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//POST request
router.post("/notes", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newData = {
      title,
      text,
      id: uuid(),
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
