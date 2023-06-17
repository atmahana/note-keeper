import Note from "../components/Note";
import NoteForm from "../components/NoteForm";
import Search from "../components/Search";
import { useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { NoteContext } from "../context/Notes/NoteProvider";

export default function Content() {
  const [parent] = useAutoAnimate();
  const context = useContext(NoteContext);

  return (
    <div className="flex flex-col flex-1 items-center sm:items-start sm:justify-start gap-5 min-w-full min-h-max sm:px-12 py-5 bg-base-200 z-0 overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col min-w-full gap-5 items-center">
        <NoteForm onAdd={context.addNote}/>
        <Search />
      </div>
      <div
        ref={parent}
        className="flex flex-col sm:flex-row gap-5 flex-wrap w-full border justify-center align-center sm:justify-between border-sky-500"
      >
        {context.notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              dateCreated={note.dateCreated}
              onDelete={context.deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}
