import "./TodoItem.scss"

function TodoItem(props){
    const {description} = props;
    return(
        <div className="todo-item">
            <input type="checkbox" id="" name="" value=""></input>
            <p className="typography">{description}</p>
        </div>
    )
}

export default TodoItem;