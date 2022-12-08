import "./TodoItem.scss";
import { useState } from "react";

function TodoItem(props) {
    const {deleteItem, updateTodo, ...todoProps} = props; 
  const { description, required, completed } = todoProps;
  const handleDelete = ()=>{
    deleteItem(todoProps)
  }
  const handleCheckBox = ()=>{
    const object = {...todoProps, completed:!completed}
    updateTodo(object)
  }
  return (
    <div className="todo-item">
      <input type="checkbox" name="completed" checked={completed} onChange={handleCheckBox} value={completed}/>
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
