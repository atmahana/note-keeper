import { useState } from "react";

function CircleButton(props) {

  // const [isAdd, setIsAdd] = useState(true);

  const addStyles = "hover:bg-amber-100 bg-amber-300 text-white hover:text-black w-12 h-12 rounded-full text-3xl z-50 fixed sm:absolute bottom-5 right-5 drop-shadow";

  const deleteStyles = "hover:bg-amber-500 bg-white w-12 h-12 rounded-full text-3xl z-50 fixed sm:absolute bottom-0 right-5 drop-shadow"

  return (
    <button onClick={props.onClick} className={props.type === "add" ? addStyles : deleteStyles}>
      {props.text}
    </button>
  );
}

export default CircleButton;
