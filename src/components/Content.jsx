import { Note } from "./Note";
import notes from "../notes"

function createNote(noteEntry){
  return(
    <Note
    key={noteEntry.key}
      title={noteEntry.title}
      content={noteEntry.content}
    />
  )
}

export default function Content() {
  return (
    <div className="flex gap-5 min-w-full sm:px-12 py-5">
      {notes.map(createNote)}
    </div>
  );
}
