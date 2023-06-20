/* eslint-disable react/prop-types */
import { TrashIcon, EditIcon, MenuBurgerIcon } from "./Icons/Icons";
import { PinSlashIcon, PinFillIcon } from "./Icons/PinIcon";
import { useContext } from "react";
import { NoteContext } from "../context/Notes/NoteProvider";
import { ModalContext } from "../context/ModalProvider";
import Modal from "./Modal";
import EditNoteForm from "./EditNoteForm";

function Note(props) {
  const { pinnedNotes } = useContext(NoteContext);
  const {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  } = useContext(ModalContext);

  const isPinned = pinnedNotes.some((pinnedNote) => pinnedNote.id === props.id);

  function pinHandler() {
    props.onPin(props.id);
  }

  function unpinHandler() {
    props.onUnpin(props.id);
  }

  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="card w-auto bg-secondary drop-shadow hover:drop-shadow-sm text-neutral">
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p className="whitespace-pre-wrap break-all">{props.content}</p>
          <div className="flex items-center justify-between">
            <small className="text-base font-medium">{props.dateCreated}</small>
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
                      id={props.id}
                      onClick={isPinned ? unpinHandler : pinHandler}
                    >
                      {isPinned ? <PinSlashIcon /> : <PinFillIcon />}
                      {isPinned ? "Unpin" : "Pin"}
                    </button>
                  </li>
                  <li>
                    <button id={props.id} onClick={openModalHandler}>
                      <EditIcon /> Edit
                    </button>
                  </li>
                  <li>
                    <button id={props.id} onClick={deleteHandler}>
                      <TrashIcon /> Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpen}>
        <EditNoteForm titleValue={props.title} contentValue={props.content} onClose={closeModalHandler} />
      </Modal>
    </>
  );
}

export default Note;
