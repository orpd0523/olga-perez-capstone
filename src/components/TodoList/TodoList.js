import TodoItem from "../TodoItem/TodoItem";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../TextField/TextField";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../Button/Button";
import "./TodoList.scss";
import useTodoStore from "../../stores/todoStore";

function TodoList() {
  const { todoList, getTodosFromLS, deleteTodo, addTodo, updateTodo } =
    useTodoStore();
  useEffect(() => {
    getTodosFromLS();
  }, [getTodosFromLS]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const description = event.target["description"].value;
    if (description !== "") {
      const obj = {
        id: uuidv4(),
        user_id: 1,
        description: event.target["description"].value,
        required: false,
        completed: false,
      };
      addTodo(obj);
      event.target.reset();
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Button type="submit" color="clear">
          <HiOutlinePlusSm className="form__submit" />
        </Button>
        <TextField
          autoComplete="off"
          id="test"
          name="description"
          placeholder="Add New Task"
        />
      </form>
      <div>
        {todoList?.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
