const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//
router.route("/create").post((req, res) => {
    const text = req.body.text;
    const completed = req.body.completed;
    const id = req.body.id;
    const newNote = new Note({
        text,
        completed,
        id
    });

    newNote.save();
})

module.exports = router;