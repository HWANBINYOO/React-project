import React from "react";
import { useRecoilState } from "recoil";
import { todoListR } from "../../recoil/todo";
import * as S from "./Style";

interface TodoItemProps {
  item: {
    id: number;
    text: string;
  };
}

// const TodoItem = ({ todo, onRemove }: { todo: any; onRemove: any }) => {
const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListR);

  const deletItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== item.id);
    setTodoList(newList);
  };

  return (
    <>
      <S.TodoItem>
        {item.text}
        {/* <S.DelectButton onClick={() => onRemove(todo.id)}>삭제</S.DelectButton> */}
        <S.DelectButton onClick={deletItem}>삭제</S.DelectButton>
      </S.TodoItem>
    </>
  );
};
export default TodoItem;
