import { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import "../assets/style/TodoPopup.css";

const TodoPopup = ({
  onClosePopup,
  onAddTodo,
  selectedTodo,
  onRemoveTodo,
  onEditTodo,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
    onClosePopup();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onEditTodo(selectedTodo.id, inputValue);
    setInputValue("");
    onClosePopup();
  };

  useEffect(() => {
    if (selectedTodo) {
      setInputValue(selectedTodo.text);
    } else {
      setInputValue("");
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="todoPopup_bg" onClick={onClosePopup}></div>
      <form onSubmit={selectedTodo ? handleEdit : handleAdd}>
        <input
          placeholder="할일을 써주세요 :)"
          value={inputValue}
          onChange={handleChange}
        />
        {selectedTodo ? (
          <div className="todoActions">
            <TiPencil onClick={handleEdit} />
            <TiTrash onClick={() => onRemoveTodo(selectedTodo.id)} />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoPopup;
