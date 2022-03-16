import React from "react";
import * as S from "./Style";

const TodoItem = ({ todo, onRemove }: { todo: any; onRemove: any }) => {
  return (
    <>
      <S.TodoItem>
        {todo.text}
        <S.DelectButton onClick={() => onRemove(todo.id)}>삭제</S.DelectButton>
      </S.TodoItem>
    </>
  );
};
export default TodoItem;
