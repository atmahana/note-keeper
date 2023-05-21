import CircleButton from "./CircleButton";

function NoteForm() {
  return (
    <div className="flex min-w-full justify-center">
      <form className="relative flex flex-col bg-slate-100 w-96 h-auto drop-shadow-md">
        <input className="p-5 font-bold text-xl" name="title" placeholder="Title" />
        <textarea className="py-10 px-5" name="content" placeholder="Take a note..." rows="3" />
        <CircleButton />
      </form>
    </div>
  );
}

export default NoteForm;
