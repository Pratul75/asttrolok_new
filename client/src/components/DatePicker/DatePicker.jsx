import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [consultationdates, setConsultationDates] = useState([]);
  const allConsultations = useSelector(
    (state) => state?.userConsultations?.data
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleConsultations = (allConsultations) => {
    let arr = [];
    allConsultations.map((item) => {
      arr.push(dateConverter(item?.bookingdate));
    });
    if (arr.length) {
      setConsultationDates(arr);
    }
  };

  const dateConverter = (dateString) => {
    const [day, month, year] = dateString.split("/");
    const formattedDate = new Date(`${month}/${day}/${year}`);
    return formattedDate;
  };

  useEffect(() => {
    if (allConsultations) {
      handleConsultations(allConsultations);
    }
  }, [allConsultations]);

  const tileClassName = ({ date }) => {
    const currentDate = new Date(date.toDateString());

    // Check if the current date is in the consultation dates array
    if (
      consultationdates.some(
        (consultationDate) =>
          new Date(consultationDate.toDateString()).getTime() ===
          currentDate.getTime()
      )
    ) {
      return "bg-blue-500 text-white rounded-full";
    }

    // Check if the current date is the selected date
    if (currentDate.getTime() === selectedDate.getTime()) {
      return "bg-blue-500 text-white rounded-full";
    }

    return "";
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Calendar
        className="border rounded-lg p-4 w-full shadow-lg bg-white"
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="US"
        tileClassName={tileClassName}
      />
      <p className="mt-4 text-sm text-gray-500">
        Selected Date: {selectedDate.toString()}
      </p>
    </div>
  );
};

export default CalendarPicker;
