import './TodoAlert.css';

const TodoAlert = ({ isVisible, type, alertMessage = "", onConfirm, onCancel }) => {
  if (!isVisible) return null; 
  return (
    <div>
      <div className="todo-popup-bg" onClick={onCancel}></div>
      <div className={`todo-popup ${type}`}>
        <p className="title">{alertMessage}</p>
        <div className="alert-actions">
          <button className="confirm" onClick={onConfirm}>
            확인
          </button>
          <button className="cancle" onClick={onCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAlert;
