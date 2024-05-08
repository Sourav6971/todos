import React from "react";
import Todo from "./Todo";
export default function Todos(props) {
  const myStyle = {
    minheigth: "100vh",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((element) => {
          return <Todo todoitem={element} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
}
