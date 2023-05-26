import { useEffect, useRef, useState } from "react";
import AddIcon from "./Icons/AddIcon";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const titleMini ="p-5 font-bold text-xl rounded-xl bg-base-100 input-bordered input-primary";
const titleExpand = "p-5 font-bold text-xl rounded-t-xl bg-base-100 input-bordered input-primary";

function NoteForm(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const wrapperRef = useRef(null);
  removeExpand(wrapperRef);

  const [isExpanded, setExpanded] = useState(false);

  const [inputRef] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out"
  });

  function removeExpand(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function handleInput(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function expand() {
    setExpanded(true);
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
    <form
      ref={wrapperRef}
      className="card w-4/5 lg:w-1/2 xl:w-1/3 bg-base-100 shadow-lg"
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
            rows="5"
            value={note.content}
          />
        )}

        {isExpanded && (
          <div className="card-actions justify-end absolute bottom-5 right-5">
            <button
              onClick={submitNote}
              className="btn btn-circle drop-shadow btn-primary"
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
