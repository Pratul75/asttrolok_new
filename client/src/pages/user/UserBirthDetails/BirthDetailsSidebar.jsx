import { FiSearch } from "react-icons/fi";
import { InfoCard } from "../../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOtherDetails } from "../../../features/userDetails/UserDetailsSlice";

const BirthDetailsSidebar = () => {

  // const loginResponse = useSelector((state) => state.loginResponse.value);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState("");

  const getpersonalDetailOfUser = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:4000/api/users/getpersonalDetail`,
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
     
        setUserProfile(resp?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getpersonalDetailOfUser();
    getOthersBirthDetails();
  }, []);

  const [friendsFamily, setFriendsFamily] = useState('');


  const getOthersBirthDetails = async () => {
    try {
      const resp = await axios.get(`http://localhost:4000/api/users/getAllotherBirthDetails`, {
        headers: {
          "Content-Type": "application/json",
          role: JSON.parse(localStorage.getItem("user"))?.role,
          Authorization: JSON.parse(localStorage.getItem("token"))?.token,
        },
      });

      if (resp?.data?.errorCode === 200) {
        setFriendsFamily(resp?.data?.data);


      }

    } catch (error) {
      console.log(error);
    }
  };


  const handleItemClick = (item) => {

    dispatch(setOtherDetails(item))
    // Perform any additional logic or actions when an item is clicked
  };

  return (
    <div className="w-1/3 h-[50vh] overflow-y-auto border-r-[2px] mt-4 p-4 relative">
      <div className="form-control">
        <input type="text" className="input w-full" placeholder="Search" />
        <FiSearch className="w-5 h-5 text-gray-400 absolute right-8 top-7" />
      </div>
      <div>
        
        {userProfile ? (<InfoCard
          key={userProfile?._id}
          id={userProfile?._id}
          color="bg-primary"
          heading={userProfile?.firstName + " " + userProfile?.lastName}
          subHeading={userProfile?.email}
          icon="VB"
          handleItemClick={() => (handleItemClick(userProfile))}
        />) : (" ")}
      </div>

      <div>
        {friendsFamily &&
          friendsFamily.map((item) => (
            <InfoCard
              key={item._id}
              id={item._id}
              color="bg-primary"
              heading={item.firstName + " " + item.lastName}
              subHeading={item.email}
              icon="VB"
              handleItemClick={() => (handleItemClick(item))}
            />
          ))}
      </div>
    </div>
  );
};

export default BirthDetailsSidebar;
