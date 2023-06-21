import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileUpdateSchema } from "../../../validations";
import axios from "axios";
import { useEffect, useState } from "react";

const PersonalDetails = () => {
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
        console.log(resp?.data?.data);
        setUserProfile(resp?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpersonalDetailOfUser();
  }, []);

  let initialFormValues = {};
  useEffect(() => {
     initialFormValues = {
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      location: userProfile?.location,
      email: userProfile?.email,
      mobile: userProfile?.mobile,
      address: userProfile?.address,
      // ...
    };

    reset(initialFormValues); // Reset the form values after fetching the user profile

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(profileUpdateSchema()), defaultValues: initialFormValues?(initialFormValues):(' ') });

  const onSubmit = async (data) => {
   
    
    try {
   
      const resp = await axios.post(
        `http://localhost:4000/api/users/personalDetail`,
        { data },
        {
          headers: {
            "Content-Type": "application/json", // Set the default Content-Type header
            // Add any additional headers you need
            role: JSON.parse(localStorage.getItem("user"))?.role,
            Authorization: JSON.parse(localStorage.getItem("token"))?.token,
          },
        }
      );

      if (resp?.data) {
        console.log(resp?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="w-full rounded-lg shadow-lg p-4">
      <div>
        <h4 className="text-xl">Personal Details</h4>
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
          <button type="submit" className="btn btn-info">
            save
          </button>
          <button type="reset" className="btn btn-outline btn-error">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
