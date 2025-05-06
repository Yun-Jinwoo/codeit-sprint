import { useContext } from "react";
import CalendarContext from "./CalendarContext";

const CalendarFooter = () => {
  const { selectedDate } = useContext(CalendarContext);
  const date = `${selectedDate.getFullYear()}-${
    selectedDate.getMonth() + 1
  }-${selectedDate.getDate()}`;

  return <div className="selected-date">선택된 날짜 : {date}</div>;
};

export default CalendarFooter;
