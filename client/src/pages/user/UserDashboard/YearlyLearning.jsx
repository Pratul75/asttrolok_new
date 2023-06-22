import { TotalFundBox, YearlyLearningChart } from "../../../icons";

const YearlyLearning = () => {
  return (
    <div className="w-1/3 h-[40-vh] shadow-lg p-4 rounded-lg">
      <div>
        <h4 className=" font-semibold">Yearly Learning Yearly</h4>
        <p className="text-sm">Every Month</p>
      </div>
      <YearlyLearningChart />
      <div className="flex gap-5 mt-2">
        <span className="font-extralight">Apr</span>
        <span className="font-extralight">May</span>
        <span className="font-extralight">June</span>
        <span className="font-extralight">July</span>
        <span className="font-extralight">Aug</span>
        <span className="font-extralight">Sept</span>
      </div>
      <div className="flex justify-between w-full mt-20">
        <div className="flex gap-4">
          <div>
            <TotalFundBox />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extralight">Total Fund</span>
            <p className="font-semibold text-2xl">$3635</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <TotalFundBox />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extralight">Expenses</span>
            <p className="font-semibold text-2xl">$3635</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyLearning;
