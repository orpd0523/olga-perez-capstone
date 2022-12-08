import TodoItem from "../TodoItem/TodoItem";

const todoArray = [
    {
        id: 1,
        user_id: 1,
        description: "Wake up on time",
        status: "",
        repeat: "",
        required: true
    },
    {
        id: 2,
        user_id: 1,
        description: "Drink water",
        status: "",
        repeat: "",
        required: true
    },
    {
        id: 3,
        user_id: 1,
        description: "Feed yourself",
        status: "",
        repeat: "",
        required: true
    },
    {
        id: 4,
        user_id: 1,
        description: "Brush teeth",
        status: "",
        repeat: "",
        required: true
    },
    {
        id: 5,
        user_id: 1,
        description: "Do 1 productive thing",
        status: "",
        repeat: "",
        required: true
    }
];

function TodoList(){
    return(
        <div>
            {todoArray.map((todo)=>{
                return(
                    <TodoItem key={todo.id}{...todo}/>
                )
            })}
        </div>
    )
}

export default TodoList;