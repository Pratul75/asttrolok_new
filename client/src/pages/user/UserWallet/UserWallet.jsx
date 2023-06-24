import WalletBannerImg from "../../../assets/walletBanner.png";
import { Header } from "../../../components";
import TransactionHistoryChart from "../../../assets/transactionHistoryChart.png";
import VisaIcon from "../../../assets/visaIcon.png";
import PayOwnerIcon from "../../../assets/payOwnerIcon.png";

const UserWallet = () => {
  return (
    <div className="p-4">
      <Header
        secondaryText="Welcome Asttrolok Wallet Page"
        bannerImage={WalletBannerImg}
        primaryText="Wallet"
      />
      {/* first row */}
      <div className="w-full flex  gap-4 mt-8">
        <div className="w-1/2 shadow-md h-auto p-4">
          <h4 className="font-semibold ">Wallet Details</h4>
          <div>
            <p className="font-extralight mt-4">Total Balance</p>
            <h4 className="text-3xl">$2232</h4>
          </div>
          {/* first row */}
          <div className="flex gap-4 w-full mt-4">
            <div className="p-4 w-1/2 bg-[#1652F0] rounded-lg">
              <h4 className="font-thin text-white">Last Month</h4>
              <p className="text-white font-semibold">$42,658</p>
            </div>
            <div className="p-4 w-1/2 bg-[#F5F6FA] rounded-lg">
              <h4 className="font-thin font-white">Expenses</h4>
              <p>$1,798</p>
            </div>
          </div>
          <div className="flex gap-4 w-full mt-4">
            <div className="p-4 w-1/2 bg-[#F5F6FA] rounded-lg">
              <h4>Last Month</h4>
              <p>$42,658</p>
            </div>
            <div className="p-4 w-1/2 bg-[#F5F6FA]  rounded-lg">
              <h4>Expenses</h4>
              <p>$1,798</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-md h-auto p-4">
          <div className="flex w-full justify-between">
            <h4 className="font-semibold ">Bills</h4>

            <p className="text-blue-500 cursor-pointer">see more</p>
          </div>

          <div className="mt-8 w-full flex flex-col gap-4">
            <div className="w-full flex justify-between p-4 border-[1px] border-gray-300 shadow-md rounded-lg">
              <div className="flex flex-col gap-2">
                <p className="font-extralight text-xs">
                  Course: Astrology Course
                </p>
                <p>$1700</p>
              </div>
              <div className="">
                <button className="btn bg-[#1652F0] hover:bg-[#99b6ff] text-white  rounded-lg w-32">
                  Pay
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between p-4 border-[1px] border-gray-300 shadow-md rounded-lg">
              <div className="flex flex-col gap-2">
                <p className="font-extralight text-xs">
                  Course: Astrology Course
                </p>
                <p>$1700</p>
              </div>
              <div className="">
                <button className="btn bg-[#1652F0] text-white  rounded-lg w-32">
                  Pay
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between p-4 border-[1px] border-gray-300 shadow-md rounded-lg">
              <div className="flex flex-col gap-2">
                <p className="font-extralight text-xs">
                  Course: Astrology Course
                </p>
                <p>$1700</p>
              </div>
              <div className="">
                <button className="btn bg-[#1652F0] text-white  rounded-lg w-32">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="w-full flex  gap-4 mt-8">
        <div className="w-1/2 shadow-md h-auto p-4">
          <h4 className="font-semibold ">Transaction History</h4>
          <img src={TransactionHistoryChart} />
        </div>
        <div className="w-1/2 shadow-md h-auto p-4">
          <h4 className="font-semibold ">Card Details</h4>
          <div className="w-full h-auto p-4 bg-gray-950 rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <span className="font-thin text-xs text-gray-300">
                Debit Card
              </span>
              <span>
                <img src={VisaIcon} />
              </span>
            </div>
            {/* second row */}
            <div className="flex w-full gap-4 text-gray-50 mt-4">
              <span>0123</span>
              <span>4567</span>
              <span>8901</span>
              <span>2345</span>
            </div>
            <div className="flex justify-between items-center text-white">
              <h4 className="text-gray-50 uppercase mt-4">Vishesh Bajpayee</h4>
              <h4>EXP: 06/30</h4>
            </div>
          </div>
          <div className="w-full h-auto p-4 bg-gray-100 rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <span className="font-thin text-xs text-gray-700">
                Debit Card
              </span>
              <span>
                <img src={PayOwnerIcon} />
              </span>
            </div>
            {/* second row */}
            <div className="flex w-full gap-4 text-gray-800 mt-4">
              <span>0123</span>
              <span>4567</span>
              <span>8901</span>
              <span>2345</span>
            </div>
            <div className="flex justify-between items-center text-black">
              <h4 className=" uppercase mt-4">Vishesh Bajpayee</h4>
              <h4>EXP: 06/30</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
