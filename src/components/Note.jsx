import TrashIcon from "./Icons/TrashIcon";
import EditIcon from "./Icons/EditIcon";
import PinIcon from "./Icons/PinIcon";
import { useState } from "react";
import MenuIcon from "./Icons/MenuIcon";

function Note(props) {
  const [isPinned, setPin] = useState(false);

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
              <MenuIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <button className="">
                  <PinIcon /> Pin
                </button>
              </li>
              <li>
                <button className="">
                  <EditIcon /> Edit
                </button>
              </li>
              <li>
                <button onClick={handleClick} className="">
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
