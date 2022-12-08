import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../Textfield/TextField";

const todoArray = [
  {
    id: "e676ad08-016c-4d03-8414-edc25981d84e",
    user_id: 1,
    description: "Wake up on time",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: "af75732e-a1bb-4672-811e-0969b8f0c1f8",
    user_id: 1,
    description: "Drink water",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: "42e51468-a9bf-4d53-87a7-ca5b838077ee",
    user_id: 1,
    description: "Feed yourself",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: "46a6fa67-325c-432e-b4b5-8adf9a432c9f",
    user_id: 1,
    description: "Brush teeth",
    status: "",
    repeat: "",
    required: true,
  },
  {
    id: "fd2642f3-0ec3-4bcb-83f6-a9a95964adad",
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
        required: false,
      };
      addTodo(obj);
      event.target.reset();
    }
  };
  const deleteItem = (todo) => {
    setTodoList((current) => {
      return current.filter((item) => {
        return item.id !== todo.id;
      });
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">+</button>
        <TextField id="test" name="description" placeholder="Add New Task" />
      </form>
      <div>
        {todoList?.map((todo) => {
          return <TodoItem key={todo.id} {...todo} deleteItem={deleteItem}/>;
        })}
      </div>
    </>
  );
}

export default TodoList;
