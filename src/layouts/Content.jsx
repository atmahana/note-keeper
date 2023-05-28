import Note from "../components/Note";
import NoteForm from "../components/NoteForm";
import Search from "../components/Search";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Content() {
  const [notes, setNotes] = useState([]);
  const [parent] = useAutoAnimate();
  const [searchText ,setSearchText] = useState('');

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex flex-col flex-1 items-center sm:items-start sm:justify-start gap-5 min-w-full min-h-max sm:px-12 py-5 bg-base-200 z-0 overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col min-w-full gap-5 items-center">
        <NoteForm onAdd={addNote} />
        <Search/>
      </div>
      <div
        ref={parent}
        className="flex flex-col sm:flex-row gap-5 flex-wrap w-full border justify-center align-center sm:justify-between border-sky-500"
      >
        {
          notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              dateCreated={noteItem.dateCreated}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}
