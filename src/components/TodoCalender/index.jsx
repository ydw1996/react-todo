import { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./TodoCalender.css";
import useTodoStore from "../../store/useTodoStore";

const TodoCalender = () => {
  const { currentDate, setCurrentDate } = useTodoStore();
  const [ activeStartDate, setActiveStartDate ] = useState(new Date());
  const calendarRef = useRef(null);

  // 현재 날짜 리셋
  const resetToToday = (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    setCurrentDate(new Date());
    setActiveStartDate(new Date());
  };

  useEffect(() => {
    const calendarElement = calendarRef.current;
    if (!calendarElement) return;
    
    const labelElement = calendarElement.querySelector(
      ".react-calendar__navigation__label"
    );
    if (!labelElement) return;

    labelElement.addEventListener("click", resetToToday);

    return () => {
      labelElement.removeEventListener("click", resetToToday);
    };
  }, [setCurrentDate]);

  return (
    <div ref={calendarRef}>
      <Calendar
        onChange={setCurrentDate}
        value={currentDate}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
};

export default TodoCalender;
