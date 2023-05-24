import { useState } from "react";
import AddIcon from "./Icons/AddIcon";

function NoteForm(props) {
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
      <form className="card w-96 bg-white shadow-lg">
        <div className="card-body p-0.5">
          <input
            className="p-5 font-bold text-xl rounded-t-xl bg-white"
            onChange={handleInput}
            name="title"
            placeholder="Title"
            value={note.title}
          />
          <textarea
            className="p-5 rounded-b-xl bg-white"
            onChange={handleInput}
            name="content"
            placeholder="Take a note..."
            rows="4"
            value={note.content}
          />
          <div className="card-actions justify-end absolute bottom-5 right-5">
            <button onClick={submitNote} className="btn btn-circle drop-shadow">
              <AddIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
