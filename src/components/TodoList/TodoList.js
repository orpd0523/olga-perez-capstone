import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../Textfield/TextField";

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
    setTodoList((current) => {
      return [...current, todo];
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const description = event.target["description"].value;
    if (description !== "") {
      const obj = {
        id: uuidv4(),
        user_id: 1,
        description: event.target["description"].value,
      };
      addTodo(obj);
      event.target.reset();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">+</button>
        <TextField id="test" name="description" placeholder="Add New Task" />
      </form>
      <div>
        {todoList?.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
}

export default TodoList;
