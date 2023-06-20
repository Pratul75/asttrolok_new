import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Calendar
        className="border rounded-lg p-4 w-full shadow-lg bg-white"
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="US"
        tileClassName={({ date, view }) =>
          view === "month" && date.getDate() === selectedDate.getDate()
            ? "bg-blue-500 text-white rounded-full"
            : ""
        }
      />
      <p className="mt-4 text-sm text-gray-500">
        Selected Date: {selectedDate.toString()}
      </p>
    </div>
  );
};

export default CalendarPicker;
