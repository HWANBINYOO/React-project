import { atom } from "recoil";

export interface TodoListR {
  id: number;
  text: string;
}

export const todoListR = atom<TodoListR[]>({
  key: "todoListState",
  default: [
    {
      id: 1,
      text: "todolist 1",
    },
    {
      id: 2,
      text: "todolist 2",
    },
    {
      id: 3,
      text: "todolist 3",
    },
  ],
});
