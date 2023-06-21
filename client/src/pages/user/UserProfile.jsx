import { useEffect, useState } from "react";
import UserProfileBanner from "../../assets/userProfileBanner.png";
import { Placeholder } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileUpdateSchema } from "../../validations";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserProfile = () => {

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileUpdateSchema()) });


  

  
  


  const [userProfile, setUserProfile] = useState('')
   
  const onSubmit = async(data)=>{
     

    



    try {
      console.log("onsumbit");
       const resp = await axios.post(`http://localhost:4000/api/users/personalDetail`,{data},
       {
        headers: {
          "Content-Type": "application/json", // Set the default Content-Type header
          // Add any additional headers you need
          role: JSON.parse(localStorage.getItem("user"))?.role,
          Authorization: JSON.parse(localStorage.getItem("token"))?.token,
        },
      })
      console.log(resp);
     if(resp){
      console.log(resp?.data);
     }
 
    } catch (error) {
      console.log(error);  
    }
  
   
  }
    

 
   
  const getpersonalDetailOfUser = async() =>{
    try {
      const resp = await axios.get(`http://localhost:4000/api/users/getpersonalDetail`, {
        headers: {
          "Content-Type": "application/json", // Set the default Content-Type header
          // Add any additional headers you need
          role: JSON.parse(localStorage.getItem("user"))?.role,
          Authorization: JSON.parse(localStorage.getItem("token"))?.token,
        },
      })
      if(resp?.data?.errorCode === 200){
        console.log(resp?.data?.data);
        setUserProfile(resp?.data?.data)
      }
    } catch (error) {
       console.log(error);
    }
  }

  useEffect(()=>{
    getpersonalDetailOfUser();
   },[])
 




  return (
    <>
      {/* header */}
      <header className="w-full h-auto py-8 px-8 bg-blue-100 rounded-lg mt-8">
        <div className="w-full flex justify-between relative">
          {/* left side */}
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl">User Profile</h4>
            <p className="text-sm">Account Settings</p>
          </div>
          {/* right side */}
          <div className="absolute right-0 -top-28">
            {/* Image */}
            <img src={UserProfileBanner} alt="user profile banner" />
          </div>
        </div>
      </header>
      <section className="mt-12 w-full flex justify-center mx-auto ">
        <div className="w-3/4 flex flex-wrap gap-4 bg-base-100 p-8  rounded-lg">
          {/* first row */}
          <div className="flex gap-4 w-full">
            <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
              <h4 className="text-xl">Change Profile</h4>
              <p className="text-sm text-gray-400">
                Change you profile picture from here
              </p>
              <div className="w-full h-auto flex flex-col gap-4 justify-center items-center mt-4">
                <Placeholder letter="VB" />
                <div className="flex gap-4">
                  <button className="btn btn-primary"> upload</button>
                  <button className="btn btn-outline btn-error">Reset</button>
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Allowed JPG, GIF, PNG, Max size 800K
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
              <h4 className="text-xl">Change Password</h4>
              <p className="text-sm text-gray-400">
                To change your password please confirm here
              </p>
              <div className="mt-4">
                {/* current password */}
                <div className="form-control w-full">
                  <label htmlFor="currentPassword" className="label">
                    <span className="label-text">Current Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("currentPassword")}
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                </div>
                {/* new password */}
                <div className="form-control w-full">
                  <label htmlFor="newPassword" className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("newPassword")}
                    type="password"
                    name="newPassword"
                    id="newPassword"
                  />
                </div>

                {/* confirm password */}
                <div className="form-control w-full">
                  <label htmlFor="confirmPassword" className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("confirmPassword")}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
                <button className="btn btn-primary mt-4 float-right">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="w-full rounded-lg shadow-lg p-4">
            <div>
              <h4 className="text-xl">Person Details</h4>
              <p className="text-sm text-gray-400">
                To change your personal detail, edit and save from here
              </p>
            </div>

            {/* first row of personal details */}
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">First Name</span>
                </label>
                {console.log(userProfile)}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("firstName")}
                  type="text"
                  defaultValue={userProfile?.firstName}
                  name="firstName"
                  id="firstName"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="lastName" className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("lastName")}
                  type="text"
                  defaultValue={userProfile?.lastName}
                  name="lastName"
                  id="lastName"
                />
              </div>
            </div>

            {/* second row for personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="location" className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("location")}
                  defaultValue={userProfile?.location}
                  type="text"
                  name="location"
                  id="location"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="currency" className="label">
                  <span className="label-text">Currency</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="number"
                  name="currency"
                  id="currency"
                />
              </div>
            </div>
            {/* third row for personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("email")}
                  type="email"
                  defaultValue={userProfile?.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="mobile" className="label">
                  <span className="label-text">mobile</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("mobile")}
                  type="tel"
                  defaultValue={userProfile?.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>
            </div>
            {/* fourth row for personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="address" className="label">
                  <span className="label-text">Address</span>
                </label>
                
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  {...register("address")}
                  defaultValue={userProfile?.address}
                  type="text"
                  name="address"
                  id="address"
                />
              </div>
            </div>
            {/* button */}
            <div className="flex gap-4 mt-4 justify-end">
              <button type="submit" className="btn btn-info">save</button>
              <button  className="btn btn-outline btn-error">Cancel</button>
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
