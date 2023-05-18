function Note(props) {
  // h1 title p content
  return (
    <div className="bg-amber-100 hover:bg-amber-300 hover:drop-shadow-sm min-w-min max-w-xs drop-shadow-md rounded-lg px-4 py-5 my-2">
      <h1 className="font-bold text-xl">{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export { Note };
