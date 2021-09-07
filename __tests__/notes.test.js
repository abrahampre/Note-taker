const fs =require("fs");
jest.mock("fs");

const {
    createNewNote
} = require("../lib/notes.js");

const {notes} = require ('../db/db.json');

test("crates a new note", ()=>{
    const note = createNewNote (
        {title: "Primero", text: "textoprimero"},
        notes
    );
    expect(note.title).toBe("Primero");
    expect(note.text).toBe("textoprimero");
});
