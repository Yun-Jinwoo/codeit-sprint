import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (month, date) => {
    console.log("selectedDate ::", date);
    const newDate = new Date(selectedDate);
    newDate.setMonth(month);
    newDate.setDate(date);
    setSelectedDate(date);
  };

  return (
    <Calendar onChange={handleSelectDate} value={selectedDate}>
      <Calendar.Header />
      <Calendar.Navigator />
      <Calendar.Body />
      <Calendar.Footer />
    </Calendar>
  );
}

export default App;
