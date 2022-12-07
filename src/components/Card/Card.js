import "./Card.scss";
import TodoList from "../TodoList/TodoList.js";

function Card() {
  return (
    <div className="card">
      <TodoList></TodoList>
    </div>
  );
}

export default Card;
