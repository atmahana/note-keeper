import { createContext, useReducer } from "react";

export const NoteContext = createContext({
  notes: [],
  pinnedNotes: [],
  addNote: () => {},
  deleteNote: () => {},
  pinNote: () => {},
  unpinNote: () => {},
  editNote: () => {},
});

const ACTIONS = {
  ADD: "add_note",
  DELETE: "delete_note",
  PIN: "pin_note",
  UNPIN: "unpin_note",
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

  if (newState.type === ACTIONS.DELETE) {
    return {
      ...state,
      notes: state.notes.filter(note => note.id !== newState.id),
    };
  }

  if (newState.type === ACTIONS.PIN) {
    const noteToPinIndex = state.notes.findIndex(
      (note) => note.id === newState.id
    );
    if (noteToPinIndex === -1) return state; // No note found, return the current state

    const noteToPin = state.notes[noteToPinIndex];

    return {
      notes: state.notes.filter((_, index) => index !== noteToPinIndex),
      pinnedNotes: [...state.pinnedNotes, noteToPin],
    };
  }

  if (newState.type === ACTIONS.UNPIN) {
    const { id } = newState;
    const noteToUnpinIndex = state.pinnedNotes.findIndex(
      (note) => note.id === id
    );
    if (noteToUnpinIndex === -1) return state; // No note found, return the current state
    const noteToUnpin = state.pinnedNotes[noteToUnpinIndex];
    return {
      notes: [...state.notes, noteToUnpin],
      pinnedNotes: state.pinnedNotes.filter(
        (_, index) => index !== noteToUnpinIndex
      ),
    };
  }

  return state;
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
      type: ACTIONS.DELETE,
      id: id,
    });
  };

  const pinNoteHandler = (id) => {
    dispatchNotes({
      type: ACTIONS.PIN,
      id: id,
    });
  };

  const unpinNoteHandler = (id) => {
    dispatchNotes({
      type: ACTIONS.UNPIN,
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
    unpinNote: unpinNoteHandler,
    editNote: editNoteHandler,
  };

  return (
    <NoteContext.Provider value={contextData}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
