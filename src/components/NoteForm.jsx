import { AddIcon } from "./Icons/Icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useExpand from "../hooks/useExpand";
import useInput from "../hooks/useInput";

const titleMini =
  "p-5 font-bold text-xl rounded-xl bg-base-100 input-bordered input-primary";
const titleExpand =
  "p-5 font-bold text-xl rounded-t-xl bg-base-100 input-bordered input-primary";

function NoteForm(newNote) {
  const { ref: wrapperRef, isExpanded, expand } = useExpand();
  const [inputRef] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out",
  });

  const {
    inputs,
    handleChangeValue: inputChangeHandler,
    resetInput,
    calcLimit,
  } = useInput();

  const inputsNotNull =
    inputs.title.trim() !== "" && inputs.content.trim() !== "";
  const contentLOE100 = 100 - inputs.content.length >= 0;
  const isValidInput = inputsNotNull && contentLOE100;

  function submitNote(event) {
    event.preventDefault();
    if (isValidInput) {
      newNote.onAdd(inputs);
      resetInput();
    }
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
          onChange={inputChangeHandler}
          onClick={expand}
          name="title"
          placeholder={isExpanded ? "Title" : "Take a note..."}
          value={inputs.title}
        />
        {isExpanded && (
          <textarea
            onChange={inputChangeHandler}
            className="p-5 rounded-b-xl bg-base-100 input-bordered input-primary"
            name="content"
            placeholder="Take a note..."
            rows="10"
            value={inputs.content}
          />
        )}

        {isExpanded && (
          <div className="card-actions flex justify-between items-center p-5 absolute w-full bottom-0 pointer-events-none">
            <small
              className={contentLOE100 ? "text-base" : "text-base text-red-500"}
            >
              {calcLimit()} Remaining
            </small>
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
