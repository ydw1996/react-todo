import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

const useTodoStore = create((set, get) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  return {
    todos: {
      [formattedDate]: [
        {
          id: uuidv4(),
          text: "🍀 오늘의 Todo로 하루를 채워봐요!",
          checked: false,
        },
      ],
    },
    selectedTodo: null,
    isPopupOpen: false,
    filter: "all",
    currentDate,
    setCurrentDate: (date) => {
      const { todos } = get();
      const today = new Date();
      const todayFormattedDate = today.toISOString().split("T")[0];
      const selectedFormattedDate = new Date(date).toISOString().split("T")[0];

      // 선택한 날짜가 오늘인 경우 항상 기본 Todo 추가
      if (!todos[selectedFormattedDate]) {
        const newTodos = {
          ...todos,
          [selectedFormattedDate]:
            selectedFormattedDate === todayFormattedDate
              ? [
                  {
                    id: uuidv4(),
                    text: "🍀 오늘의 Todo로 하루를 채워봐요!",
                    checked: false,
                  },
                ]
              : [],
        };

        set({ todos: newTodos });
      }

      set({ currentDate: new Date(date) });
    },

    // 공통 헬퍼 함수
    getDateSpecificData: () => {
      const { todos, currentDate } = get();
      const formattedDate = currentDate.toISOString().split("T")[0];
      return { todos, formattedDate };
    },

    // 현재 선택된 날짜 투두
    getTodosForCurrentDate: () => {
      const { todos, formattedDate } = get().getDateSpecificData();
      const filter = get().filter;
      const todosForDate = todos[formattedDate] || [];

      if (filter === "all") return todosForDate;
      if (filter === "done") return todosForDate.filter((todo) => todo.checked);
      if (filter === "undone")
        return todosForDate.filter((todo) => !todo.checked);
    },

    remainingTodos: () => {
      const todosForDate = get().getTodosForCurrentDate();
      return todosForDate.filter((todo) => !todo.checked).length;
    },

    // 상태 업데이트 메서드
    setFilter: (filter) => set({ filter }),
    setSelectedTodo: (todo) => set({ selectedTodo: todo }),
    togglePopup: () => set((state) => ({ isPopupOpen: !state.isPopupOpen })),

    // CRUD 메서드
    addTodo: (text) => {
      const { todos, formattedDate } = get().getDateSpecificData();
      const newTodo = { id: uuidv4(), text, checked: false };

      set({
        todos: {
          ...todos,
          [formattedDate]: [...(todos[formattedDate] || []), newTodo],
        },
      });
    },

    editTodo: (id, text) => {
      const { todos, formattedDate } = get().getDateSpecificData();

      set({
        todos: {
          ...todos,
          [formattedDate]: todos[formattedDate].map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        },
      });
    },

    removeTodo: (id) => {
      const { todos, formattedDate } = get().getDateSpecificData();

      set({
        todos: {
          ...todos,
          [formattedDate]: todos[formattedDate].filter(
            (todo) => todo.id !== id
          ),
        },
      });
    },

    toggleTodoCheck: (id) => {
      const { todos, formattedDate } = get().getDateSpecificData();

      set({
        todos: {
          ...todos,
          [formattedDate]: todos[formattedDate].map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          ),
        },
      });
    },

    deleteAllTodos: () => {
      const { todos, formattedDate } = get().getDateSpecificData();

      const { [formattedDate]: _, ...remainingTodos } = todos;
      set({ todos: remainingTodos });
    },
  };
});

export default useTodoStore;
