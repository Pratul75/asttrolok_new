import { FiSearch } from "react-icons/fi";
import { InfoCard } from "../../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherDetails } from "../../../features/userDetails/UserDetailsSlice";

const BirthDetailsSidebar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
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
 console.log('BirthDetailsSidebar.jsx', item);
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
        {friendsFamily &&
          friendsFamily.map((item) => (
            <InfoCard
              key={item._id}
              id={item._id}
              color="bg-primary"
              heading={item.firstName + " " + item.lastName}
              subHeading={item.email}
              icon="VB"
              handleItemClick = {()=>(handleItemClick(item))}
            />
          ))}
      </div>
    </div>
  );
};

export default BirthDetailsSidebar;
