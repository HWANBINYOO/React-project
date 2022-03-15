import React, { useState } from "react";
import * as S from "./Style";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");

  const onChange = (e: any) => {
    setTodoInput(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
    if (todoInput == null) {
      return;
    }
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    setTodoInput("");
    //input 창 비우기
  };

  return (
    <>
      <S.TodoInput>
        <form onSubmit={onSubmit}>
          <S.InputBox>
            <input
              placeholder="할일을입력하세요"
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
