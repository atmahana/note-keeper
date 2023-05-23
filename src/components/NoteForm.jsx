import { useState } from "react";
import CircleButton from "./CircleButton";

function NoteForm(props) {
  const addStyles =
    "hover:bg-amber-100 bg-amber-300 text-white hover:text-black w-12 h-12 rounded-full text-3xl z-50 fixed sm:absolute bottom-5 right-5 drop-shadow";

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="flex min-w-full justify-center">
      <form className="relative flex flex-col w-96 h-auto drop-shadow-md">
        <input
          className="p-5 font-bold text-xl rounded-t-lg bg-slate-50"
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          className="py-10 px-5 rounded-b-lg bg-slate-50"
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote} className={addStyles}>
          +
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
