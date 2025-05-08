import { useContext } from "react";
import CalendarContext from "./CalendarContext";

const dayList = ["일", "월", "화", "수", "목", "금", "토"];

const CalendarBody = () => {
  const { selectedDate, currentMonth, setCurrentMonth, onChange } =
    useContext(CalendarContext);

  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const firstDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  firstDate.setDate(firstDate.getDate() - firstDay);

  const dateList = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(firstDate);
    date.setDate(firstDate.getDate() + i);
    if (i === 35 && date.getMonth() !== currentMonth.getMonth()) break;
    dateList.push(date);
  }

  return (
    <div className="calendar-body">
      <div className="days">
        {dayList.map((day, index) => (
          <div key={index} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="dates">
        {dateList.map((date, index) => (
          <div
            key={index + 7}
            onClick={() => {
              setCurrentMonth(date);
              onChange(currentMonth.getMonth(), date);
            }}
            className={`date ${
              date.getMonth() !== currentMonth.getMonth() ? "gray" : ""
            } ${
              date.getFullYear() === selectedDate.getFullYear() &&
              date.getMonth() === selectedDate.getMonth() &&
              date.getDate() === selectedDate.getDate()
                ? "selected"
                : ""
            }`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;
