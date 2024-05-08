import React from "react";
export default function Todo({ todoitem, onDelete }) {
  return (
    <div>
      <h6>{todoitem.sno + ". " + todoitem.title}</h6>
      <p>{todoitem.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todoitem);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}
