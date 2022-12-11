import create from "zustand"; //a simplified version of useState!!!
//importing zustand for state management, allow to control state from anywhere within the app

const INITIAL_STATE = [
  {
    id: "e676ad08-016c-4d03-8414-edc25981d84e",
    user_id: 1,
    description: "Wake up on time",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "af75732e-a1bb-4672-811e-0969b8f0c1f8",
    user_id: 1,
    description: "Drink water",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "42e51468-a9bf-4d53-87a7-ca5b838077ee",
    user_id: 1,
    description: "Feed yourself",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "46a6fa67-325c-432e-b4b5-8adf9a432c9f",
    user_id: 1,
    description: "Brush teeth",
    completed: false,
    repeat: "",
    required: true,
  },
  {
    id: "fd2642f3-0ec3-4bcb-83f6-a9a95964adad",
    user_id: 1,
    description: "Do 1 productive thing",
    completed: false,
    repeat: "",
    required: true,
  },
];

const updateLocalStorage = (todoList) => {
  const json = JSON.stringify(todoList);
  localStorage.setItem("todoList", json);
};

const useTodoStore = create((set) => ({
  todoList: INITIAL_STATE,
  getTodosFromLS: () => set((state)=>{
    if (localStorage["todoList"]) {
        const data = JSON.parse(localStorage.getItem("todoList"));
        return {todoList: data}
      } else {
        return {todoList: state.todoList}
      }
  }),
  addTodo: (todo) =>
    set((state) => {
      const newArray = [...state.todoList, todo]; //spreading only the todoList from the state then adding todo to the end of the todoList state
      updateLocalStorage(newArray);
      return { todoList: newArray };
    }),
  deleteTodo: (todo) =>
    set((state) => {
      const newArray = state.todoList.filter((item) => {
        return item.id !== todo.id;
      });
      updateLocalStorage(newArray);
      return { todoList: newArray };
    }),
    updateTodo: (todo) =>
    set((state) => {
      const newArray = state.todoList.map((item) => {
        //loop through the items and checking if item and todo have same id. If they do, replace the item with the todo. If they don't we return the item. How we are updating a single item in array.
        return item.id === todo.id ? todo : item;
      });
      updateLocalStorage(newArray);
      return { todoList: newArray };
    }),
}));

export default useTodoStore;
