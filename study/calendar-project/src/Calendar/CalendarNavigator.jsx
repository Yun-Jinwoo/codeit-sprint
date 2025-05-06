import { useContext } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import CalendarContext from "./CalendarContext";

const CalendarNavigator = () => {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext);

  const goPrev = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const goNext = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  return (
    <div className="button-container">
      <button className="prev" onClick={goPrev}>
        <SlArrowLeft />
      </button>
      <button className="next" onClick={goNext}>
        <SlArrowRight />
      </button>
    </div>
  );
};

export default CalendarNavigator;
