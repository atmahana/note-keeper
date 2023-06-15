import { useState } from "react";
import { AddIcon } from "./Icons/Icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useExpand from "../hooks/useExpand";

const titleMini =
  "p-5 font-bold text-xl rounded-xl bg-base-100 input-bordered input-primary";
const titleExpand =
  "p-5 font-bold text-xl rounded-t-xl bg-base-100 input-bordered input-primary";

function NoteForm(newNote) {
  const date = new Date().toLocaleDateString();

  const [note, setNote] = useState({
    title: "",
    content: "",
    dateCreated: date,
  });

  const charLimit = 100;

  const [inputRef] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out",
  });

  const {ref: wrapperRef, isExpanded, expand} = useExpand();

  function handleInput(event) {
    const { name, value } = event.target;

    if (charLimit - value.length >= 0) {
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    }
  }

  function calcLimit() {
    return charLimit - note.content.length;
  }

  function submitNote(event) {
    event.preventDefault();
    newNote.onAdd(note);
    setNote({
      title: "",
      content: "",
      dateCreated: date,
    });
  }

  return (
    <form
      ref={wrapperRef}
      className="card w-4/5 lg:w-1/2 xl:w-1/3 bg-base-100 shadow-md"
    >
      <div
        className="card-body p-0.5 border-transparent focus:border-transparent focus:ring-0"
        ref={inputRef}
      >
        <input
          className={isExpanded ? titleExpand : titleMini}
          onChange={handleInput}
          onClick={expand}
          name="title"
          placeholder={isExpanded ? "Title" : "Take a note..."}
          value={note.title}
        />
        {isExpanded && (
          <textarea
            onChange={handleInput}
            className="p-5 rounded-b-xl bg-base-100 input-bordered input-primary"
            name="content"
            placeholder="Take a note..."
            rows="10"
            value={note.content}
          />
        )}

        {isExpanded && (
          <div className="card-actions flex justify-between items-center p-5 absolute w-full bottom-0 pointer-events-none">
            <small className="text-base">{calcLimit()} Remaining</small>
            <button
              onClick={submitNote}
              className="btn btn-circle drop-shadow btn-primary pointer-events-auto"
            >
              <AddIcon />
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
