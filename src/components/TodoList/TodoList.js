import TodoItem from "../TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../Textfield/TextField";

const todoArray = [
  {
    id: "e676ad08-016c-4d03-8414-edc25981d84e",
    user_id: 1,
    description: "Wake up on time",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "af75732e-a1bb-4672-811e-0969b8f0c1f8",
    user_id: 1,
    description: "Drink water",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "42e51468-a9bf-4d53-87a7-ca5b838077ee",
    user_id: 1,
    description: "Feed yourself",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "46a6fa67-325c-432e-b4b5-8adf9a432c9f",
    user_id: 1,
    description: "Brush teeth",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "fd2642f3-0ec3-4bcb-83f6-a9a95964adad",
    user_id: 1,
    description: "Do 1 productive thing",
    completed: false,
    repeat: "",
    required: true,
  },
];

function TodoList() {
  const [todoList, setTodoList] = useState(todoArray);
  useEffect(() => {
    if (localStorage["todoList"]) {
      const data = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(data);
    }
  }, []);
  const updateLocalStorage = (todoList) => {
    const json = JSON.stringify(todoList);
    localStorage.setItem("todoList", json);
  };
  const addTodo = (todo) => {
    setTodoList((current) => {
      const newArray = [...current, todo];
      updateLocalStorage(newArray);
      return newArray;
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
        completed: false
      };
      addTodo(obj);
      event.target.reset();
    }
  };
  const deleteItem = (todo) => {
    setTodoList((current) => {
      const newArray = current.filter((item) => {
        return item.id !== todo.id;
      });
      updateLocalStorage(newArray);
      return newArray;
    });
  };
  const updateTodo = (todo) => {
    setTodoList((current) => {
      const newArray = current.map((item) => {
        //loop through the items and checking if item and todo have same id. If they do, replace the item with the todo. If they don't we return the item. How we are updating a single item in array.
        return item.id === todo.id ? todo : item;
      });
      updateLocalStorage(newArray);
      return newArray;
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
          return <TodoItem key={todo.id} {...todo} deleteItem={deleteItem} updateTodo={updateTodo}/>;
        })}
      </div>
    </>
  );
}

export default TodoList;
