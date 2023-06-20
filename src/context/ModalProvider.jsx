import { useState, createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModalHandler() {
    setIsOpen(true);
  }

  function closeModalHandler() {
    setIsOpen(false);
  }

  const contextValue = {
    isOpen: isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
