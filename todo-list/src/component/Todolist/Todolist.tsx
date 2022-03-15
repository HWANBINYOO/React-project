import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./Style";

const Todolist = ({ todolist }: { todolist: any }) => {
  return (
    <>
      <S.Todolist>
        {todolist.map((todo: any) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </S.Todolist>
    </>
  );
};

export default Todolist;
