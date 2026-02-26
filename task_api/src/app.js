const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

//create notes api
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "notes created succesfully",
  });
});

//get all notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "All notes fetched succesfully",
    notes: notes,
  });
});

//update notes

//Delete notes by id

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  delete notes[id];
  res.status(200).json({
    message: "Notes deleted successfully",
  });
});
module.exports = app;
