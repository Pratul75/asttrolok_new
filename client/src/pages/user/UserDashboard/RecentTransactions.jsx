import { RecentTransactionItem } from "../../../components";

const RecentTransactions = () => {
  return (
    <div className="w-1/3 h-[40-vh] shadow-lg p-14 rounded-lg">
      <div>
        <h4 className="font-semibold">Rescent Transactions</h4>
        <p className="font-extralight"> How to secure our Transactions</p>
      </div>
      <div className="flex flex-col">
        <RecentTransactionItem
          time="9:00"
          flagColor="border-warning"
          transactionText="Payment Received from John Doe of $380 "
        />
        <RecentTransactionItem
          time="9:00"
          flagColor="border-info"
          transactionText="Payment Received from John Doe of $380 "
        />
        <RecentTransactionItem
          time="9:00"
          flagColor="border-secondary"
          transactionText="Payment Received from John Doe of $380 "
        />
      </div>
    </div>
  );
};

export default RecentTransactions;
