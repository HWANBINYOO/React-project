import React from "react";
import { useRecoilState } from "recoil";
import { todoListR } from "../../recoil/todo";
import * as S from "./Style";

interface TodoItemProps {
  id: number;
  text: string;
}

// const TodoItem = ({ todo, onRemove }: { todo: any; onRemove: any }) => {
const TodoItem = ({ id, text }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListR);

  const deletItem = () => {
    const newList = todoList.filter((todos) => todos.id !== id);
    setTodoList(newList);
  };

  return (
    <>
      <S.TodoItem>
        {text}
        {/* <S.DelectButton onClick={() => onRemove(todo.id)}>삭제</S.DelectButton> */}
        <S.DelectButton onClick={deletItem}>삭제</S.DelectButton>
      </S.TodoItem>
    </>
  );
};
export default TodoItem;
