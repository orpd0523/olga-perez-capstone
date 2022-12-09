import "./Card.scss";
import TodoList from "../TodoList/TodoList.js";

function Card(props) {
  const { color="primary" } = props;
  return (
    <div className={`card card--${color}`}>{props.children}
    </div>
  );
}

export default Card;
