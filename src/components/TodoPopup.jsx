import { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiPencil, TiTrash } from 'react-icons/ti';
import '../assets/style/TodoPopup.css';

const TodoPopup = ({ onClosePopup, onAddTodo, selectedTodo, onRemoveTodo, onEditTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert('할 일을 입력해 주세요.');
      return;
    }
    onAddTodo(inputValue);
    setInputValue('');
    onClosePopup();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert('할 일을 입력해 주세요.');
      return;
    }
    onEditTodo(selectedTodo.id, inputValue);
    setInputValue('');
    onClosePopup();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      selectedTodo ? handleEdit(e) : handleAdd(e);
    }
  };

  useEffect(() => {
    if (selectedTodo) {
      setInputValue(selectedTodo.text);
    } else {
      setInputValue('');
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="todo-popup-bg" onClick={onClosePopup}></div>
      <div className="todo-popup">
        <input
          placeholder="할일을 써주세요 :)"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {selectedTodo ? (
          <div className="todo-actions">
            <TiPencil onClick={handleEdit} />
            <TiTrash onClick={() => onRemoveTodo(selectedTodo.id)} />
          </div>
        ) : (
          <button onClick={handleAdd}>
            <MdAddCircle />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoPopup;
