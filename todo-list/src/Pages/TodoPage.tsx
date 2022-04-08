// import TodoInput from "../component/TodoInput/TodoInput";
// import React, { useState } from "react";
import Header from "../component/Header/Header";
import Todolist from "../component/Todolist/Todolist";
// let listId: number = 2;
const TodoPage = () => {
  // const [todolist, setTodolist] = useState([
  //   {
  //     id: 1,
  //     text: "todolist 1",
  //   },
  //   {
  //     id: 2,
  //     text: "todolist 2",
  //   },
  //   {
  //     id: 0,
  //     text: "todolist 3",
  //   },
  // ]);

  // const handdleTodolist = (text: string) => {
  //   const todo = {
  //     id: listId + 1,
  //     text,
  //   };
  //   setTodolist(todolist.concat(todo));
  //   listId += 1;
  //   console.log(listId);
  // };

  // const onRemove = (id: number): void => {
  //   setTodolist(todolist.filter((todo) => todo.id !== id));
  // };

  return (
    <>
      <Header />
      {/* <TodoInput onSubmit={handdleTodolist} /> */}
      {/* <Todolist todolist={todolist} onRemove={onRemove} /> */}
      <Todolist />
    </>
  );
};

export default TodoPage;
