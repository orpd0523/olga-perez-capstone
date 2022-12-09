import "./TodoItem.scss";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

function TodoItem(props) {
  const { deleteItem, updateTodo, ...todoProps } = props;
  const { description, required, completed } = todoProps;
  const handleDelete = () => {
    deleteItem(todoProps);
  };
  const handleCheckBox = () => {
    const object = { ...todoProps, completed: !completed };
    updateTodo(object);
  };
  return (
    <div className="todo-item">
      <span>
        <label className="container">
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={handleCheckBox}
            value={completed}
          />
          <span className="checkmark"></span>
        </label>
      </span>
      <p className="typography todo-item__description">{description}</p>
      {!required ? (
        <span>
          {/*if not required(!) check condition(?) render button else(:) nothing(null)*/}
          <Button onClick={handleDelete} color>
            <HiOutlineTrash />
          </Button>
        </span>
      ) : null}
    </div>
  );
}

export default TodoItem;
