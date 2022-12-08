import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const todoArray = [
  {
    id: 1,
    user_id: 1,
    description: "Wake up on time",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: 2,
    user_id: 1,
    description: "Drink water",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: 3,
    user_id: 1,
    description: "Feed yourself",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: 4,
    user_id: 1,
    description: "Brush teeth",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: 5,
    user_id: 1,
    description: "Do 1 productive thing",
    status: "",
    repeat: "",
    required: true,
  },
];

function TodoList() {
  const [todoList, setTodoList] = useState(todoArray);
  const addTodo = (todo) => {
    const obj = { id: uuidv4(), user_id: 1, description: "test" };
    setTodoList((current) => {
      return [...current, obj];
    });
  };
  return (
    <>
    <button type="button" onClick={addTodo}>ADD ITEM</button>
      <div>
        {todoList?.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
}

export default TodoList;
