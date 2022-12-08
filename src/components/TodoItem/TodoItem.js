import "./TodoItem.scss";

function TodoItem(props) {
  const { description, required, deleteItem } = props;
  const handleDelete = ()=>{
    deleteItem(props)
  }
  return (
    <div className="todo-item">
      <input type="checkbox" id="" name="" value=""></input>
      <p className="typography">{description}</p>
      {!required ? (
        <span>
          {/*if not required(!) check condition(?) render button else(:) nothing(null)*/}
          <button type="button" onClick={handleDelete}>-</button>
        </span>
      ) : null}
    </div>
  );
}

export default TodoItem;
