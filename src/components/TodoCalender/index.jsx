import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./TodoCalender.css";
import useTodoStore from "../../store/useTodoStore";

const TodoCalender = () => {
    const { currentDate, setCurrentDate } = useTodoStore();

  return (
    <Calendar
      onChange={setCurrentDate}
      value={currentDate}
      prev2Label={null} 
      next2Label={null} 
    />
  );
};

export default TodoCalender;
