import { TrashIcon, EditIcon, MenuBurgerIcon } from "./Icons/Icons";
import { PinSlashIcon, PinFillIcon } from "./Icons/PinIcon";
import { useRef, useState } from "react";

function Note(note) {
  const [isPinned, setPin] = useState(false);
  const deleteBtnRef = useRef();

  function pinNnote() {
    setPin(!isPinned);
  }

  function handleClick() {
    note.onDelete(note.id);
  }

  return (
    <div className="card w-96 bg-secondary drop-shadow hover:drop-shadow-sm text-neutral">
      <div className="card-body">
        <h1 className="card-title">{note.title}</h1>
        <p className="whitespace-pre-wrap break-all">{note.content}</p>
        <div className="flex items-center justify-between">
          <small className="text-base font-medium">{note.dateCreated}</small>
          <div className="card-actions justify-end text-base-content">
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="btn btn-circle btn-ghost">
                <MenuBurgerIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <button id={note.id} onClick={pinNnote}>
                    {isPinned ? <PinSlashIcon /> : <PinFillIcon />}
                    {isPinned ? "Unpin" : "Pin"}
                  </button>
                </li>
                <li>
                  <button>
                    <EditIcon id={note.id} /> Edit
                  </button>
                </li>
                <li>
                  <button ref={deleteBtnRef} id={note.id} onClick={handleClick}>
                    <TrashIcon /> Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
