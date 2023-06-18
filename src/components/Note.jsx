import { TrashIcon, EditIcon, MenuBurgerIcon } from "./Icons/Icons";
import { PinSlashIcon, PinFillIcon } from "./Icons/PinIcon";
import { useContext } from "react";
import { NoteContext } from "../context/Notes/NoteProvider";

function Note(note) {
  const {pinnedNotes} = useContext(NoteContext);

  const isPinned = pinnedNotes.some(pinnedNote => pinnedNote.id === note.id);

  function pinHandler() {
    note.onPin(note.id);
  }

  function unpinHandler() {
    note.onUnpin(note.id);
  }

  function deleteHandler() {
    note.onDelete(note.id);
  }

  return (
    <div className="card w-auto bg-secondary drop-shadow hover:drop-shadow-sm text-neutral">
      <div className="card-body">
        <h1 className="card-title">{note.title}</h1>
        <p className="whitespace-pre-wrap break-all">{note.content}</p>
        <div className="flex items-center justify-between">
          <small className="text-base font-medium">{note.dateCreated}</small>
          <div className="card-actions justify-end text-base-content">
            <div className="dropdown dropdown-top z-50">
              <label tabIndex={0} className="btn btn-circle btn-ghost">
                <MenuBurgerIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-40 z-50"
              >
                <li>
                  <button
                    id={note.id}
                    onClick={isPinned ? unpinHandler : pinHandler}
                  >
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
                  <button id={note.id} onClick={deleteHandler}>
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
