import "./App.css";
import AddTodos from "./Components/AddTodos";

import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const onDelete = (todoitem) => {
    setTodos(todos.filter((index) => index !== todoitem));
  };
  const addTodo = (titles, description) => {
    console.log(titles);
    console.log(description);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: titles,
      desc: description,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const myStyle = {
    margin: "30px auto",
  };
  return (
    <div style={myStyle}>
      <AddTodos addTodo={addTodo} />
      <br />
      <hr />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
