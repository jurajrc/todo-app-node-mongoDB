const mongoose = require("mongoose");

const notesSchema = {
    text: String, 
    completed: Boolean,
    id: Number
}

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;