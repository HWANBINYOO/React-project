import React, { useState } from "react";
import * as S from "./Style";

const TodoInput = (props: any) => {
  const [todoInput, setTodoInput] = useState("");
  const onChange = (e: any) => {
    setTodoInput(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if (todoInput == "") {
      return;
    }
    props.onSubmit(todoInput);
    setTodoInput("");
    //input 창 비우기
  };

  return (
    <>
      <S.TodoInput>
        <form onSubmit={onSubmit}>
          <S.InputBox>
            <input
              placeholder="할일을 입력하세요"
              type={"text"}
              value={todoInput}
              onChange={onChange}
            />
          </S.InputBox>
          <button onClick={onSubmit}>추가</button>
        </form>
      </S.TodoInput>
    </>
  );
};

export default TodoInput;
