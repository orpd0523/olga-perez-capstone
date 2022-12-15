import create from "zustand";

const INITIAL_STATE = [
  {
    id: "e676ad08-016c-4d03-8414-edc25981d84e",
    user_id: 1,
    description: "Wake up on time",
    completed: false,
    required: true,
  },
  {
    id: "af75732e-a1bb-4672-811e-0969b8f0c1f8",
    user_id: 1,
    description: "Drink water",
    completed: false,
    required: true,
  },
  {
    id: "42e51468-a9bf-4d53-87a7-ca5b838077ee",
    user_id: 1,
    description: "Feed yourself",
    completed: false,
    required: true,
  },
  {
    id: "46a6fa67-325c-432e-b4b5-8adf9a432c9f",
    user_id: 1,
    description: "Brush teeth",
    completed: false,
    required: true,
  },
  {
    id: "fd2642f3-0ec3-4bcb-83f6-a9a95964adad",
    user_id: 1,
    description: "Do 1 productive thing",
    completed: false,
    required: true,
  },
];

const LS_KEY = "todoList";
const updateLocalStorage = (todoList) => {
  const json = JSON.stringify(todoList);
  localStorage.setItem(LS_KEY, json);
};

const useTodoStore = create((set) => ({
  todoList: INITIAL_STATE,
  completedCount: 0,
  resetTodos: () =>
    set((state) => {
      const newArray = state.todoList.map((todo) => {
        todo.completed = false;
        return todo;
      });
      updateLocalStorage(newArray);
      localStorage.setItem("completedCount", 0);
      return { todoList: newArray, completedCount: 0 };
    }),
  getTodosFromLS: () =>
    set((state) => {
      if (localStorage[LS_KEY]) {
        const data = JSON.parse(localStorage.getItem(LS_KEY));
        const count = parseInt(localStorage.getItem("completedCount"));
        return { todoList: data, completedCount: count };
      } else {
        return { todoList: state.todoList };
      }
    }),
  addTodo: (todo) =>
    set((state) => {
      const newArray = [...state.todoList, todo];
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
        return item.id === todo.id ? todo : item;
      });
      updateLocalStorage(newArray);
      const { required, completed } = todo;
      let count = state.completedCount;
      if (required) {
        count = completed ? count + 1 : count - 1;
        localStorage.setItem("completedCount", count);
      }

      return { todoList: newArray, completedCount: count };
    }),
}));

export default useTodoStore;
