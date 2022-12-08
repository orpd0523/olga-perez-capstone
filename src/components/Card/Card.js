import "./Card.scss";
import TodoList from "../TodoList/TodoList.js";

function Card(props) {
  return (
    <div className="card">{props.children}
    </div>
  );
}

export default Card;
