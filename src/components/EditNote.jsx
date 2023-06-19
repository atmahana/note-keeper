import React from "react";

export default function EditNote() {
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        open modal
      </button>
      <dialog
        id="my_modal_1"
        className="bg-base-100 w-1/3 shadow-md rounded-xl"
      >
        <form method="dialog" className="grid gap-5 m-4">
          <div>
            <h3 className="font-bold text-lg">Edit Note</h3>
          </div>
          <div>
            <input
              className="bg-base-300 p-5 w-full rounded-t-lg"
              name="title"
              placeholder="Title"
            />
            <textarea
              className="bg-base-300 p-5 w-full rounded-b-lg"
              name="content"
              placeholder="Note Content"
              rows="5"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button className="btn btn-ghost">Close</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
