import { FiSearch } from "react-icons/fi";
import { InfoCard } from "../../../components";
import { useEffect, useState } from "react";
import axios from "axios";

const BirthDetailsSidebar = () => {
  useEffect(() => {
    getOthersBirthDetails();
  }, []);

  const [friendsFamily, setfriendsFamily] = useState("");

  const getOthersBirthDetails = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:4000/api/users/getAllotherBirthDetails`,
        {
          headers: {
            "Content-Type": "application/json", // Set the default Content-Type header
            // Add any additional headers you need
            role: JSON.parse(localStorage.getItem("user"))?.role,
            Authorization: JSON.parse(localStorage.getItem("token"))?.token,
          },
        }
      );
      if (resp?.data?.errorCode === 200) {
        setfriendsFamily(resp?.data?.data);
      }
      console.log("BirthDetailsSidebar.jsx", resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/3 shadow rounded-lg border-r-[2px] mt-4 p-4 relative">
      <div className="form-control">
        <input type="text" className="input w-full" placeholder="Search" />
        <FiSearch className="w-5 h-5 text-gray-400 absolute right-8 top-7" />
      </div>
      <div className="h-[70vh] overflow-y-auto px-3 py-2">
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-warning"
          heading="Awesome Bro"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-secondary"
          heading="Cool Dude"
          subHeading="red@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-warning"
          heading="Awesome Bro"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-secondary"
          heading="Cool Dude"
          subHeading="red@test.com"
          icon="VB"
        />
        <div>
          {friendsFamily &&
            friendsFamily.map(
              (item) => (
               
                (
                  <InfoCard
                    id={item?._id}
                    color="bg-primary"
                    heading={item?.firstName + " " + item?.lastName}
                    subHeading={item?.email}
                    icon="VB"
                  />
                )
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default BirthDetailsSidebar;
