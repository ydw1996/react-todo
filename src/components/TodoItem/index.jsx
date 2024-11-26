import { BsCheckCircle, BsCircle } from 'react-icons/bs';

import './TodoItem.css';
import useTodoStore from '../../store/useTodoStore';

const TodoItem = ({ todo }) => {
  const { toggleTodoCheck, setSelectedTodo, togglePopup } = useTodoStore(); 
  const { id, text, checked } = todo;

  return (
    <div className={`todo-item ${checked ? 'checked' : ''}`}>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <BsCheckCircle onClick={() => toggleTodoCheck(id)} />
        ) : (
          <BsCircle onClick={() => toggleTodoCheck(id)} />
        )}
        <div
          className="text"
          onClick={() => {
            setSelectedTodo(todo); 
            togglePopup(); 
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
