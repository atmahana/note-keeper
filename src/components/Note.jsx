import TrashIcon from "./Icons/TrashIcon";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="card w-96 bg-amber-100 text-black drop-shadow hover:drop-shadow-sm">
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className="btn btn-circle btn-warning hover:bg-amber-600 hover:text-white"
          >
            <TrashIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
