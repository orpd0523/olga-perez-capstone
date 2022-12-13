import "./TodoItem.scss";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import useAvatarStore from "../../stores/avatar";

function TodoItem(props) {
  const { deleteTodo, updateTodo, ...todoProps } = props;
  const { description, required, completed } = todoProps;
  const { randomQuote } = useAvatarStore();
  const handleDelete = () => {
    deleteTodo(todoProps);
  };
  const handleCheckBox = () => {
    const object = { ...todoProps, completed: !completed };
    updateTodo(object);
    randomQuote()
  };
  return (
    <div className="todo-item">
      <span>
        <Checkbox
          name="completed"
          checked={completed}
          onChange={handleCheckBox}
          value={completed}
        />
      </span>
      <p className="typography todo-item__description">{description}</p>
      {!required ? (
        <span>
          {/*if not required(!) check condition(?) render button else(:) nothing(null)*/}
          <Button onClick={handleDelete} color="clear">
            <HiOutlineTrash className="todo-item__delete" />
          </Button>
        </span>
      ) : null}
    </div>
  );
}

export default TodoItem;
