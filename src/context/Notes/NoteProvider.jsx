import { createContext, useReducer } from "react";

export const NoteContext = createContext({
  notes: [],
  pinnedNotes: [],
  addNote: () => {},
  deleteNote: () => {},
  pinNote: () => {},
  editNote: () => {},
});

const ACTIONS = {
  ADD: "add_note",
  REMOVE: "remove_note",
  PIN: "pin_note",
  EDIT: "edit_note",
};

const initialNotes = {
  notes: [],
  pinnedNotes: [],
};

const notesReducer = (state, newState) => {
  // adding new note to notes array
  if (newState.type === ACTIONS.ADD) {
    let updatedNotes = [...state.notes, newState.note];
    return {
      ...state,
      notes: updatedNotes,
    };
  }

  if (newState.type === ACTIONS.deleteNote) {
    let updatedNotes = [
      ...state.notes.filter((item) => {
        return item.id !== newState.id;
      }),
    ];

    return {
      ...state,
      notes: updatedNotes,
    };
  }

  if (newState.type === ACTIONS.PIN) {
    let newPinnedNotes = [
      ...state.notes.filter((item) => {
        return item.id === newState.id;
      }),
    ];

    return {
      ...state,
      pinnedNotes: newPinnedNotes,
    };
  }

  return initialNotes;
};

const NoteProvider = (props) => {
  const [noteState, dispatchNotes] = useReducer(notesReducer, initialNotes);

  const addNoteHandler = (note) => {
    dispatchNotes({
      type: ACTIONS.ADD,
      note: note,
    });
  };

  const deleteNoteHandler = (id) => {
    dispatchNotes({
      type: ACTIONS.REMOVE,
      id: id,
    });
  };

  const pinNoteHandler = (id) => {
    dispatchNotes({
      type: ACTIONS.PIN,
      id: id,
    });
  };

  const editNoteHandler = (id) => {
    dispatchNotes({
      type: ACTIONS.EDIT,
      id: id,
    });
  };

  const contextData = {
    notes: noteState.notes,
    pinnedNotes: noteState.pinnedNotes,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
    pinNote: pinNoteHandler,
    editNote: editNoteHandler,
  };

  return (
    <NoteContext.Provider value={contextData}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
