import Note from "./Note";
import NoteForm from "./NoteForm";
import { useState } from "react";

export default function Content() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex flex-col items-center sm:items-start sm:justify-start gap-5 min-w-full sm:px-12 py-5 overflow-y-hidden bg-slate-100">
      <NoteForm onAdd={addNote} />
      <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}
