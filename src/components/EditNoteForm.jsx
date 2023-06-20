import useInput from "../hooks/useInput";
import { useRef, useState } from "react";
import InputText from "./Form/InputText";
import Textarea from "./Form/Textarea";

const isEmpty = (value) => value.trim() === "";

function EditNoteForm(props) {
  const { titleValue, contentValue, onClose, onFinishEdit } = props;

  const [formValidity, setValidity] = useState({
    title: true,
    content: true,
  });

  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const {
    inputs,
    handleChangeValue: inputChangeHandler,
    resetInput,
    calcRemaining,
  } = useInput();

  function submitNote(event) {
    event.preventDefault();

    // const titleValue = titleInputRef.current.value;
    // const contentValue = contentInputRef.current.value;

    // const titleValueValid = !isEmpty(titleValue);
    // const contentValueValid = !isEmpty(contentValue);

    // setValidity({
    //   title: titleValueValid,
    //   content: contentValueValid,
    // });

    // const formIsValid = titleValueValid && contentValueValid;

    // if (!formIsValid) {
    //   return;
    // }

    // onFinishEdit(inputs);
    // resetInput();
  }

  return (
    <form
      method="dialog"
      onSubmit={submitNote}
      className="grid gap-5 my-4 mx-2"
    >
      <div className="font-bold text-xl border-b">
        <h3 className="py-2 mx-5">Edit Note</h3>
      </div>
      <div className="flex gap-0.5 flex-col bg-base-300 rounded-xl relative">
        <InputText
          ref={titleInputRef}
          value={inputs.title}
          onChange={inputChangeHandler}
          placeholder="Edit title"
          className="bg-base-300 input-primary"
        />
        <Textarea
          ref={contentInputRef}
          className="bg-base-300 input-primary"
          placeholder="Edit note content"
          rows="6"
          value={inputs.content}
          onChange={inputChangeHandler}
        />
        <small className="px-5 py-3 text-base absolute bottom-0">{calcRemaining()} Remaining</small>
      </div>
      <div className="flex justify-end gap-4">
        <button onClick={onClose} className="btn btn-ghost">
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditNoteForm;
