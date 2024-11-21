import './TodoAlert.css';

const TodoAlert = ({ onConfirm, onCancel }) => {
    return (
        <div>
            <div className="todo-popup-bg" onClick={onCancel}></div>
            <div className="todo-popup">
                <p className="title">정말 모두 삭제하시겠습니까?</p>
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
