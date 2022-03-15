import TodoInput from "../component/TodoInput/TodoInput";
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Todolist from "../component/Todolist/Todolist";

const TodoPage = () => {
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      text: "todolist 1",
    },
    {
      id: 2,
      text: "todolist 2",
    },
    {
      id: 3,
      text: "todolist 3",
    },
  ]);

  return (
    <>
      <Header />
      <TodoInput />
      <Todolist todolist={todolist} />
    </>
  );
};

export default TodoPage;
