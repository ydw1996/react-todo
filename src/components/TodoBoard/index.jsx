import moment from 'moment';
import { TbSnowflake, TbSnowflakeOff } from "react-icons/tb";

import './TodoBoard.css';
import useTodoStore from "../../store/useTodoStore";

const TodoBoard = ({ children }) => {
     const { currentDate, isSnowing, toggleSnowing } = useTodoStore();

    const formattedDate = moment(currentDate).format('YYYY년 MM월 DD일');

    return (
      <div className="todo-container">
        <div className="todo-header">
          <button onClick={toggleSnowing}>
            {isSnowing ? (
              <TbSnowflake size={30} className="rotating" />
            ) : (
              <TbSnowflakeOff size={30} />
            )}
          </button>
          <h1>{formattedDate}</h1>
        </div>
        <hr />
        <div className="todo-board">{children}</div>
      </div>
    );
};

export default TodoBoard;
