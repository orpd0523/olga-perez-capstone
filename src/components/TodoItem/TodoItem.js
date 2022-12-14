import "./TodoItem.scss";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import useQuoteStore from "../../stores/quoteStore.js";

function TodoItem(props) {
  const { deleteTodo, updateTodo, ...todoProps } = props;
  const { description, required, completed } = todoProps;
  const { randomQuote } = useQuoteStore();
  const handleDelete = () => {
    deleteTodo(todoProps);
  };
  const handleCheckBox = () => {
    const object = { ...todoProps, completed: !completed };
    updateTodo(object);
    randomQuote();
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
          <Button onClick={handleDelete} color="clear">
            <HiOutlineTrash className="todo-item__delete" />
          </Button>
        </span>
      ) : null}
    </div>
  );
}

export default TodoItem;
