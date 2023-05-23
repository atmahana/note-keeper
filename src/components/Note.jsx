import { useState } from "react";
import CircleButton from "./CircleButton";
import TrashIcon from "./TrashIcon";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  // bg-amber-100 hover:bg-amber-300 hover:drop-shadow-sm
  return (
    <div className="card w-96 bg-amber-100 text-black drop-shadow hover:drop-shadow-sm">
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className="btn btn-warning hover:bg-amber-600 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
