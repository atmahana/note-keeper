import { useEffect, useRef } from "react";

function Modal({ open, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) el.showModal();
    if (!open) el.close();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      id="edit_modal"
      className="bg-base-100 w-1/2 xl:w-1/3 shadow-md rounded-xl"
    >
      {children}
    </dialog>
  );
}

export default Modal;
