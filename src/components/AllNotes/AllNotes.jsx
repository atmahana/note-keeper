import { NoteContext } from "../../context/Notes/NoteProvider";
import { useContext } from "react";
import Note from "../Note";

function AllNotes() {
  const { notes, deleteNote, pinNote } = useContext(NoteContext);

  return (
    <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start p-8 md:p-5">
      {notes?.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            dateCreated={note.date}
            onDelete={deleteNote}
            onPin={pinNote}
          />
        );
      })}
    </div>
  );
}

export default AllNotes;
