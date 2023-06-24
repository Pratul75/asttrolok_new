import { CalendarPicker, InfoCard } from "../../../components";
import { getRandomColor } from "../../../utilities";
const UpcomingConsultation = () => {
  return (
    <div className="w-full h-auto md:w-1/2 p-4 rounded-lg shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px]">
      <h4 className="text-[18px] font-semibold">Upcoming Consultation</h4>
      <p className="text-[14px]">Your upcoming events</p>
      <div className="p-4">
        <CalendarPicker />
      </div>
      <div className="overflow-y-auto h-[40vh]">
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color="bg-success"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color={getRandomColor()}
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color="bg-info"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color={getRandomColor()}
        />
      </div>
    </div>
  );
};

export default UpcomingConsultation;
