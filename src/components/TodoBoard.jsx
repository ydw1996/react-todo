import { useState } from "react";
import moment from "moment";
import "../assets/style/TodoBoard.css";

const TodoBoard = ({ children }) => {
  const [currentDate] = useState(new Date());
  const dayName = currentDate.toLocaleString("ko-KR", { weekday: "long" });
  const formattedDate = moment(currentDate).format("YYYY년 MM월 DD일");

  return (
    <div className="todoBoard">
      <h1>{formattedDate}</h1>
      <div className="day">{dayName}</div>
      <hr />
      <div className="todoBoardContainer">{children}</div>
    </div>
  );
};

export default TodoBoard;
