import { useState, useRef, useCallback, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import './App.css';
import TodoBoard from './components/TodoBoard';
import TodoList from './components/TodoList';
import TodoPopup from './components/TodoPopup';
import TodoFilter from './components/TodoFilter';
import TodoAlert from './components/TodoAlert';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '달력 기능 추가 하기 🎨',
      checked: false,
    },
    {
      id: 2,
      text: '컴포넌트, 코드 정리 📓',
      checked: true,
    },
    {
      id: 3,
      text: '자스몽 스터디 Todo리스트 생성 💪',
      checked: true,
    },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  const [filter, setFilter] = useState('all');
  const [filtersArray, setFiltersArray] = useState(todos);

  const nextId = useRef(7);

  // Todo 필터
  useEffect(() => {
    if (filter === 'all') {
      setFiltersArray(todos);
    } else if (filter === 'done') {
      setFiltersArray(todos.filter((todo) => todo.checked));
    } else if (filter === 'undone') {
      setFiltersArray(todos.filter((todo) => !todo.checked));
    }
  }, [filter, todos]);

  // Popup 함수
  const togglePopup = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setIsPopupOpen((prev) => !prev);
  };

  const toggleDeletePopup = () => {
    setIsDeleteAll((prev) => !prev);
  };

  // Todo CRUD 함수
  const addTodo = useCallback((text) => {
    if (text.trim() === '') {
      alert('할 일을 입력해주세요');
      togglePopup();
      return;
    }
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    nextId.current++;
  }, []);

  const editTodo = (id, text) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    togglePopup();
  };

  // Todo 체크 상태 토글 함수
  const toggleTodoCheck = (id) => {
    setTodos((prevTodos) => {
      const targetTodo = prevTodos.find((todo) => todo.id === id);
      if (!targetTodo) return prevTodos;

      const updatedTodo = {
        ...targetTodo,
        checked: !targetTodo.checked,
      };

      const remainingTodos = prevTodos.filter((todo) => todo.id !== id);

      const updateTodosList = updatedTodo.checked
        ? [...remainingTodos, updatedTodo]
        : [updatedTodo, ...remainingTodos];

      return updateTodosList;
    });
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-app">
      <TodoBoard>
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filter === 'all' ? todos : filtersArray}
          onToggleCheck={toggleTodoCheck}
          onTogglePopup={togglePopup}
          onSelectTodo={setSelectedTodo}
        />
        <BsFillPlusCircleFill className="todo-add-btn" onClick={togglePopup} />
        <div className="all-delete-btn" onClick={toggleDeletePopup}>
          모두 삭제
        </div>
        {isPopupOpen && (
          <TodoPopup
            selectedTodo={selectedTodo}
            onClosePopup={togglePopup}
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
            isDeletePopup={false}
          />
        )}
        {isDeleteAll && (
          <TodoAlert
            onConfirm={() => {
              deleteAllTodos();
              toggleDeletePopup();
            }}
            onCancel={toggleDeletePopup}
          />
        )}
      </TodoBoard>
    </div>
  );
};

export default App;
