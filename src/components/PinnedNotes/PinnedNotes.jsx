import { NoteContext } from "../../context/Notes/NoteProvider";
import { useContext } from "react";
import Note from "../Note";

function PinnedNotes() {
  const { pinnedNotes, deleteNote } = useContext(NoteContext);

  return (
    <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start p-8 md:p-5">
      {pinnedNotes?.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            dateCreated={note.dateCreated}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default PinnedNotes;
