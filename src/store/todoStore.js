import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [
    { id: uuidv4(), text: '달력 기능 추가 하기 🎨', checked: false },
    { id: uuidv4(), text: '컴포넌트, 코드 정리 📓', checked: true },
    { id: uuidv4(), text: '자스몽 스터디 Todo리스트 생성 💪', checked: true },
  ],
  selectedTodo: null,
  isPopupOpen: false,
  isAlertOpen: false,
  alertType: null,
  filter: 'all',
  filteredTodos: () => {
    const { todos, filter } = get();
    if (filter === 'all') return todos;
    if (filter === 'done') return todos.filter((todo) => todo.checked);
    if (filter === 'undone') return todos.filter((todo) => !todo.checked);
  },
  remainingTodos: () => get().todos.filter((todo) => !todo.checked).length,

  // 상태 업데이트 메서드
  setFilter: (filter) => set({ filter }),
  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
  togglePopup: () => set((state) => ({ isPopupOpen: !state.isPopupOpen })),
  toggleAlert: () => set((state) => ({ isAlertOpen: !state.isAlertOpen, alertType: null })), 
  openDeleteAlert: () => set({ isAlertOpen: true, alertType: 'deleteAll' }),

  // CRUD 메서드
  addTodo: (text) =>
    set((state) => ({
      todos: [{ id: uuidv4(), text, checked: false }, ...state.todos],
    })),
  editTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodoCheck: (id) =>
    set((state) => {
      const targetTodo = state.todos.find((todo) => todo.id === id);
      if (!targetTodo) return { todos: state.todos };

      const updatedTodo = {
        ...targetTodo,
        checked: !targetTodo.checked,
      };

      const remainingTodos = state.todos.filter((todo) => todo.id !== id);

      const updatedTodos = updatedTodo.checked
        ? [...remainingTodos, updatedTodo]
        : [updatedTodo, ...remainingTodos];

      return { todos: updatedTodos };
    }),
  deleteAllTodos: () => set({ todos: [] }),
}));

export default useTodoStore;
