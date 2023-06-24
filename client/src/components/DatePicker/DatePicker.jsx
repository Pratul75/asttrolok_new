import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [consultationdates, setConsultationDates]  = useState([])
  const allConsultations = useSelector(
    (state) => state?.userConsultations?.data
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
console.log(selectedDate);
  const handleConsultations = (allConsultations) => {
    let arr = [];
    allConsultations.map((item) => {
      arr.push(dateConverter(item?.bookingdate));
    });
    if(arr.length){
     
      setConsultationDates(arr)
    }
  };
console.log(consultationdates);
  const dateConverter = (dateString) => {
   
     const [day, month, year] = dateString.split('/');
     const formattedDate = new Date(`${month}/${day}/${year}`);
   
    
      return formattedDate;
     
  };

  useEffect(() => {
    if (allConsultations) {
      handleConsultations(allConsultations);
    }
  }, [allConsultations]);

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
