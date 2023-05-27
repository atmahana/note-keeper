import { TrashIcon, EditIcon, MenuBurgerIcon } from "./Icons/Icons";
import { PinSlashIcon, PinFillIcon } from "./Icons/PinIcon";
import { useState } from "react";

function Note(props) {
  const [isPinned, setPin] = useState(false);

  function pinNnote() {
    setPin(!isPinned);
  }

  const currentTheme = document
    .querySelector("html")
    .getAttribute("data-theme");
  console.log(currentTheme);

  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="card w-96 bg-secondary drop-shadow hover:drop-shadow-sm">
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="btn btn-circle btn-ghost m-1">
              <MenuBurgerIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <button onClick={pinNnote}>
                  {isPinned ? <PinSlashIcon />  : <PinFillIcon />}
                  {isPinned ? 'Unpin'  : 'Pin'}
                </button>
              </li>
              <li>
                <button>
                  <EditIcon /> Edit
                </button>
              </li>
              <li>
                <button onClick={handleClick}>
                  <TrashIcon /> Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
