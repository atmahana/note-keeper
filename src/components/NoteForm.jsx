import { AddIcon } from "./Icons/Icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useExpand from "../hooks/useExpand";
import useInput from "../hooks/useInput";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

function NoteForm(newNote) {
  const { ref: formRef, isExpanded, expand } = useExpand();
  const [formValidity, setValidity] = useState({
    title: true,
    content: true,
  });

  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const [wrapperRef] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out",
  });

  const {
    inputs: inputsWithoutID,
    handleChangeValue: inputChangeHandler,
    resetInput,
    calcRemaining,
  } = useInput();

  const inputWithId = {
    ...inputsWithoutID, 
    id: Date.now(),
  }

  function submitNote(event) {
    event.preventDefault();

    const titleValue = titleInputRef.current.value;
    const contentValue = contentInputRef.current.value;

    const titleValueValid = !isEmpty(titleValue);
    const contentValueValid = !isEmpty(contentValue);

    setValidity({
      title: titleValueValid,
      content: contentValueValid,
    });

    const formIsValid = titleValueValid && contentValueValid;

    if (!formIsValid) {
      return;
    }

    newNote.onAdd(inputWithId);
    resetInput();
  }

  const titleMiniClass =
    "font-bold text-xl rounded-xl bg-base-100 input-bordered input-primary";
  const titleExpandedClass = `font-bold text-xl rounded-t-xl input-bordered ${
    formValidity.title ? "input-primary bg-base-100" : "input-error bg-red-900"
  }`;

  const contentClass = `p-5 rounded-b-xl input-bordered ${
    formValidity.content
      ? "input-primary bg-base-100"
      : "input-error bg-red-900"
  }`;

  return (
    <form
      ref={formRef}
      className="card w-4/5 lg:w-1/2 xl:w-1/3 bg-base-100 shadow-md"
    >
      <div
        className="card-body p-0.5 border-transparent focus:border-transparent focus:ring-0"
        ref={wrapperRef}
      >
        <div
          className={isExpanded ? titleExpandedClass : titleMiniClass}
          onClick={expand}
        >
          <input
            ref={titleInputRef}
            className="bg-transparent p-5"
            onChange={inputChangeHandler}
            name="title"
            placeholder={isExpanded ? "Title" : "Take a note..."}
            value={inputWithId.title}
          />
          {!formValidity.title && <p>Please enter the title!</p>}
        </div>
        {isExpanded && (
          <textarea
            ref={contentInputRef}
            onChange={inputChangeHandler}
            className={contentClass}
            name="content"
            placeholder="Take a note..."
            rows="10"
            value={inputWithId.content}
          />
        )}

        {isExpanded && (
          <div className="card-actions flex justify-between items-center p-5 absolute w-full bottom-0 pointer-events-none">
            <small className="text-base">{calcRemaining()} Remaining</small>
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
