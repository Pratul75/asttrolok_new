import { StraightLine } from "../../icons";
const RecentTransactionItem = ({ time, flagColor, transactionText }) => {
  return (
    <div className="flex justify-between gap-4  py-4 ">
      <span>{time}</span>
      {/* transaction icon */}
      <div className="flex flex-col items-center gap-2">
        <div className={`rounded-full border-4 ${flagColor} p-2`}></div>
        <StraightLine />
      </div>
      {/* transaction text */}
      <div>
        <p>{transactionText}</p>
      </div>
    </div>
  );
};

export default RecentTransactionItem;
