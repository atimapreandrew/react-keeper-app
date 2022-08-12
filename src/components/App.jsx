import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexie";

function App() {
  const notes = useLiveQuery(() => db.notes.toArray());
  // const [notes, setNotes] = useState([]);

  const addNote = async (note) => {
    await db.notes.add(note);

    // setNotes((prevNotes) => {
    //   return [...prevNotes, note];
    // });
  };

  const deleteNote = async (id) => {
    await db.notes.delete(id);

    // setNotes((prevNotes) => {
    //   return prevNotes.filter((note, index) => {
    //     return index !== id;
    //   });
    // });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((note, index) => {
        return (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
