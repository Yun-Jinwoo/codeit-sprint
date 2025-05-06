import { useContext } from "react";
import CalendarContext from "./CalendarContext";

const CalendarHeader = () => {
  const { currentMonth } = useContext(CalendarContext);
  const month = `${currentMonth.getFullYear()}년 ${
    currentMonth.getMonth() + 1
  }월`;

  return <div className="selected-month">{month}</div>;
};

export default CalendarHeader;
