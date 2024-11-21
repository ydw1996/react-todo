import moment from 'moment';
import './TodoBoard.css';

const TodoBoard = ({ children }) => {
    const currentDate = new Date();
    const dayName = currentDate.toLocaleString('ko-KR', {
        weekday: 'long',
    });
    const formattedDate = moment(currentDate).format('YYYY년 MM월 DD일');

    return (
        <div className="todo-container">
            <h1>{formattedDate}</h1>
            <div className="day">{dayName}</div>
            <hr />
            <div className="todo-board">{children}</div>
        </div>
    );
};

export default TodoBoard;
