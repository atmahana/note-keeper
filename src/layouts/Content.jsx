import Search from "../components/Search";
import { useContext } from "react";
import { NoteContext } from "../context/Notes/NoteProvider";
import PinnedNotes from "../components/PinnedNotes/PinnedNotes";
import AllNotes from "../components/AllNotes/AllNotes";
import CreateNoteForm from "../components/CreateNoteForm";

const hasPinnedNotes = (
  <>
    <h2 className="border-b text-lg lg:text-2xl">Pinned</h2>
    <PinnedNotes />
  </>
);

const hasNotes = (
  <>
    <h2 className="border-b text-lg lg:text-2xl">All Notes</h2>
    <AllNotes />
  </>
);

const noNotesAvailable = (
  <div className="w-full text-center text-2xl mt-10">
    <p className="text-center">
      No notes available. Starts creating some notes!
    </p>
  </div>
);

export default function Content() {
  const noteContext = useContext(NoteContext);

  return (
    <div className="flex flex-col flex-1 items-center sm:items-start sm:justify-start gap-5 min-w-full min-h-max sm:px-12 py-5 bg-base-200 z-0 overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col min-w-full gap-5 items-center">
        <CreateNoteForm onAdd={noteContext.addNote} />
        <Search />
      </div>
      {noteContext.pinnedNotes.length !== 0 && hasPinnedNotes}
      {noteContext.notes.length !== 0 && hasNotes}
      {noteContext.notes.length === 0 && noNotesAvailable}
    </div>
  );
}
