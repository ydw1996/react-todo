import moment from 'moment';
import './TodoBoard.css';
import useTodoStore from "../../store/useTodoStore";

const TodoBoard = ({ children }) => {
     const { currentDate } = useTodoStore();

    const dayName = currentDate.toLocaleString('ko-KR', {
        weekday: 'long',
    });
    const formattedDate = moment(currentDate).format('YYYY년 MM월 DD일');

    return (
      <div className="todo-container">
        <h1>{formattedDate}</h1>
        <div className="day">{dayName}</div>
        <hr />
        <div className="todo-board">
          {children}
        </div>
      </div>
    );
};

export default TodoBoard;
