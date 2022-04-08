import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListR } from "../../recoil/todo";
import * as S from "./Style";

// const TodoInput = (props: any) => {
const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const setTodoList = useSetRecoilState(todoListR);
  let id: number = 4;

  const onChange = (e: any) => {
    setTodoInput(e.target.value);
  };
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   // eslint-disable-next-line eqeqeq
  //   if (todoInput == "") {
  //     return;
  //   }
  //   props.onSubmit(todoInput);
  //   setTodoInput("");
  //   //input 창 비우기
  // };
  const addItem = () => {
    setTodoList((todo) => {
      return [
        ...todo,
        {
          id: id,
          text: todoInput,
        },
      ];
    });
    setTodoInput("");
  };

  return (
    <>
      <S.TodoInput>
        {/* <form onSubmit={onSubmit}> */}
        <form onSubmit={addItem}>
          <S.InputBox>
            <input
              placeholder="할일을 입력하세요"
              type={"text"}
              value={todoInput}
              onChange={onChange}
            />
          </S.InputBox>
          {/* <button onClick={onSubmit}>추가</button> */}
          <button onClick={addItem}>추가</button>
        </form>
      </S.TodoInput>
    </>
  );
};

export default TodoInput;
