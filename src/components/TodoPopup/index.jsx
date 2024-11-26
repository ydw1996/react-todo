import { useState, useEffect, useRef } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiPencil, TiTrash } from 'react-icons/ti';

import './TodoPopup.css';
import useTodoStore from '../../store/useTodoStore';

const TodoPopup = () => {
  const { selectedTodo, togglePopup, addTodo, editTodo, removeTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (selectedTodo) {
      setInputValue(selectedTodo.text);
    } else {
      setInputValue('');
    }
    inputRef.current?.focus();
  }, [selectedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert('할 일을 입력해 주세요.');
      return;
    }
    if (selectedTodo) {
      editTodo(selectedTodo.id, inputValue);
    } else {
      addTodo(inputValue);
    }
    setInputValue('');
    togglePopup();
  };

   const handleKeyDown = (e) => {
     if (e.key === 'Enter') {
       e.preventDefault();
       handleSubmit(e);
     }
   };

  const handleRemove = (id) => {
    removeTodo(id);
    togglePopup(); // 팝업 닫기
  };

  return (
    <div>
      <div className="todo-popup-bg" onClick={togglePopup}></div>
      <div className="todo-popup">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력해주세요 :)"
          onKeyDown={handleKeyDown}
        />
        {selectedTodo ? (
          <div className="todo-actions">
            <TiPencil onClick={handleSubmit} />
            <TiTrash onClick={() => handleRemove(selectedTodo.id)} />
          </div>
        ) : (
          <button onClick={handleSubmit}>
            <MdAddCircle />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoPopup;
