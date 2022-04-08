import React from "react";
import { useRecoilValue } from "recoil";
import { TodoListR, todoListR } from "../../recoil/todo";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./Style";

// const Todolist = ({ todolist, onRemove }: { todolist: any; onRemove: any }) => {
const Todolist = () => {
  const TodoListR = useRecoilValue<TodoListR[]>(todoListR);
  return (
    <>
      <S.Todolist>
        <TodoInput />
        {TodoListR.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
        {/* {todolist.map((todo: any) => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))} */}
      </S.Todolist>
    </>
  );
};

export default Todolist;
