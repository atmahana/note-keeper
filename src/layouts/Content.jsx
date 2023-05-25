import Note from "../components/Note"
import NoteForm from "../components/NoteForm";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Content() {
  const [notes, setNotes] = useState([]);
  const [parent] = useAutoAnimate();

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
    <div className="flex flex-col flex-1 items-center sm:items-start sm:justify-start gap-5 min-w-full min-h-max sm:px-12 py-5 bg-base-200 z-0">
      <NoteForm onAdd={addNote} />
      <div ref={parent} className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center">
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
