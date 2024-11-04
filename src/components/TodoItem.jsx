import { BsCheckCircle, BsCircle } from "react-icons/bs";
import "../assets/style/TodoItem.css";

const TodoItem = ({ todo, onToggleCheck, onTogglePopup, onSelectTodo }) => {
  const { id, text, checked } = todo;

  return (
    <div className="todoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BsCheckCircle onClick={() => onToggleCheck(id)} />
        ) : (
          <BsCircle onClick={() => onToggleCheck(id)} />
        )}
        <div
          className="text"
          onClick={() => {
            onSelectTodo(todo);
            onTogglePopup();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
