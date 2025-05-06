import { useContext } from "react";
import CalendarContext from "./CalendarContext";

const CalendarHeader = () => {
  const { currentMonth } = useContext(CalendarContext);
  const date = `${currentMonth.getFullYear()}년 ${
    currentMonth.getMonth() + 1
  }월`;

  return <div className="selected-date">{date}</div>;
};

export default CalendarHeader;
