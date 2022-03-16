import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./Style";

const Todolist = ({ todolist, onRemove }: { todolist: any; onRemove: any }) => {
  return (
    <>
      <S.Todolist>
        {todolist.map((todo: any) => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </S.Todolist>
    </>
  );
};

export default Todolist;
