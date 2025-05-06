import { useState } from "react";
import CalendarContext from "./CalendarContext";
import CalendarHeader from "./CalendarHeader";
import CalendarNavigator from "./CalendarNavigator";
import CalendarBody from "./CalendarBody";
import CalendarFooter from "./CalendarFooter";
import "./Calendar.css";

const Calendar = ({ onChange, value, children }) => {
  const [currentMonth, setCurrentMonth] = useState(value);

  return (
    <CalendarContext.Provider
      value={{ selectedDate: value, currentMonth, setCurrentMonth, onChange }}
    >
      <div className="calendar">{children}</div>
    </CalendarContext.Provider>
  );
};

Calendar.Header = CalendarHeader;
Calendar.Navigator = CalendarNavigator;
Calendar.Body = CalendarBody;
Calendar.Footer = CalendarFooter;

export default Calendar;
