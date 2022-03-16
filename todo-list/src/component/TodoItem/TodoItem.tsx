import React from "react";
import * as S from "./Style";

const TodoItem = ({ todo, onRemove }: { todo: any; onRemove: any }) => {
  const { id, text } = todo;

  return (
    <>
      <S.TodoItem>
        {text}
        <S.DelectButton onClick={() => onRemove(id)}>삭제</S.DelectButton>
      </S.TodoItem>
    </>
  );
};
export default TodoItem;
