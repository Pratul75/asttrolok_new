import { InfoCard } from "../../../components";
import { TodayConsultationChart } from "../../../icons";

const TotalConsultation = () => {
  return (
    <div className="w-full  md:w-1/2 p-4  shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px] ">
      <div>
        <h4 className="text-[18px] font-semibold">Today Consultation</h4>
        <p className="text-[14px]">Know about your day</p>
      </div>
      <div className="w-full flex justify-center relative">
        <span className="absolute text-3xl md:text-5xl top-[34%] font-bold">
          30
        </span>
        <p className="absolute bottom-28">consultations</p>
        <div className="py-10">
          <TodayConsultationChart />
        </div>
      </div>
      <div className="flex justify-around w-full">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>Remaining</span>
        </div>
      </div>
      <div className="overflow-y-auto h-[45vh]">
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-accent"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color="bg-primary"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color="bg-info"
        />
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-accent"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color="bg-primary"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color="bg-info"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color="bg-success"
        />

        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color="bg-warning"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="4:30 PM"
          icon="AB"
          color="bg-secondary"
        />
      </div>
    </div>
  );
};

export default TotalConsultation;
