import TodoInput from "../component/TodoInput/TodoInput";
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Todolist from "../component/Todolist/Todolist";

const TodoPage = () => {
  let listId: number = 2;
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

  const handdleTodolist = (text: string) => {
    const todo = {
      id: listId + 1,
      text,
    };
    setTodolist(todolist.concat(todo));
    listId += 1;
  };

  return (
    <>
      <Header />
      <TodoInput onSubmit={handdleTodolist} />
      <Todolist todolist={todolist} />
    </>
  );
};

export default TodoPage;
