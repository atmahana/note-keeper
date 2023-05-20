import { Note } from "./Note";
import notes from "../notes";
import { useState } from 'react'

function createNote(noteEntry) {
  return (
    <Note
      key={noteEntry.key}
      title={noteEntry.title}
      content={noteEntry.content}
    />
  );
}

export default function Content() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-5 min-w-full sm:px-12 py-5 overflow-auto">
      <button className="bg-amber-500 w-5 h-5 p-5 rounded-full absolute bottom-5 right-5">+</button>
      {notes.map(createNote)}
    </div>
  );
}
