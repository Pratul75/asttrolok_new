import WalletBannerImg from "../../../assets/walletBanner.png";
import { Header } from "../../../components";

const UserWallet = () => {
  return (
    <div className="p-4">
      <Header
        secondaryText="Welcome Asttrolok Wallet Page"
        bannerImage={WalletBannerImg}
        primaryText="Wallet"
      />
      {/* first row */}
      <div className="w-full flex gap-4 mt-8">
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
          {/* second row */}
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
        <div>Bills</div>
      </div>
      {/* second row */}

      {/* third row */}
    </div>
  );
};

export default UserWallet;
