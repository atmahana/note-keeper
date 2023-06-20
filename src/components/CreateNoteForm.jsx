import { AddIcon } from "./Icons/Icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useExpand from "../hooks/useExpand";
import useInput from "../hooks/useInput";
import { useRef, useState } from "react";
import InputText from "./Form/InputText";
import Textarea from "./Form/Textarea";

const isEmpty = (value) => value.trim() === "";

function CreateNoteForm(newNote) {
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
  };

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
    "font-bold text-xl rounded-xl bg-base-100 input-primary";
  const titleExpandedClass = `font-bold text-xl ${
    formValidity.title ? "bg-base-100 input-primary" : "bg-red-900 input-error"
  }`;

  const contentClass = `${
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
        className="card-body gap-0.5 rounded-xl bg-transparent p-0"
        ref={wrapperRef}
      >
        <InputText
          onClick={expand}
          ref={titleInputRef}
          onChange={inputChangeHandler}
          className={isExpanded ? titleExpandedClass : titleMiniClass}
          value={inputWithId.title}
          placeholder={isExpanded ? "Title" : "Take a note..."}
        />
        {isExpanded && (
          <Textarea
            ref={contentInputRef}
            className={contentClass}
            onChange={inputChangeHandler}
            value={inputWithId.content}
            rows="10"
            placeholder="Take a note..."
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

export default CreateNoteForm;
