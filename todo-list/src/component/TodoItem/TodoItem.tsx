import React from "react";
import * as S from "./Style";

const TodoItem = ({ todo }: { todo: any }) => {
  const { id, text } = todo;

  return (
    <>
      <S.TodoItem>
        {text}
        <S.DelectButton></S.DelectButton>
      </S.TodoItem>
    </>
  );
};

export default TodoItem;
