import { useState, useRef, useCallback } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "자스몽 스터디 Todo리스트 생성 💪", checked: true },
    { id: 2, text: "컴포넌트, 코드 정리 📓", checked: true },
    { id: 3, text: "달력 기능 추가 하기 🎨", checked: false },
    { id: 4, text: "React활용하여 새로운 기능 추가 🎉", checked: false },
  ]);

  const nextId = useRef(7);

  const togglePopup = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setIsPopupOpen((prev) => !prev);
  };

  // Todo 추가 함수
  const addTodo = useCallback((text) => {
    if (text.trim() === "") {
      alert("할 일을 입력해주세요");
      togglePopup();
      return;
    }
    const newTodo = { id: nextId.current, text, checked: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    nextId.current++;
  }, []);

  // Todo 체크 상태 토글 함수
  const toggleTodoCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const selectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    togglePopup();
  };

  const editTodo = (id, text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="todoApp">
      <TodoBoard>
        <TodoList
          todos={todos}
          onToggleCheck={toggleTodoCheck}
          onTogglePopup={togglePopup}
          onSelectTodo={selectTodo}
        />
        <div className="todoAdd" onClick={togglePopup}>
          <BsFillPlusCircleFill />
        </div>
        {isPopupOpen && (
          <TodoPopup
            selectedTodo={selectedTodo}
            onClosePopup={togglePopup}
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
          />
        )}
      </TodoBoard>
    </div>
  );
};

export default App;
