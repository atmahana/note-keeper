import { Note } from "./Note";
import CircleButton from "./CircleButton";
import notes from "../notes";
import NoteForm from "./NoteForm";
import { useState } from "react";

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
  return (
    <div className="flex flex-col items-center sm:items-start sm:justify-start gap-5 min-w-full sm:px-12 py-5 overflow-y-hidden bg-slate-100">
      <NoteForm />
      <div className="flex flex-col sm:flex-row gap-5">{notes.map(createNote)}</div>
    </div>
  );
}
