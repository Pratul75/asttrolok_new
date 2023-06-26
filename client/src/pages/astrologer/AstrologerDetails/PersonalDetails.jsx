import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { astrologerdetailUpdateSchema, profileUpdateSchema } from "../../../validations";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_WRAPPER } from "../../../api";
import AreaOfinterest from "./AreaOfinterest";

const PersonalDetails = () => {
  const [userProfile, setUserProfile] = useState("");



  const getpersonalDetailOfUser = async () => {
    try {
      const resp = await API_WRAPPER.get(`api/astrologer/getpersonalDetail`)

      if (resp?.data?.data) {

        setUserProfile(resp?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(astrologerdetailUpdateSchema()) });


  useEffect(() => {
    getpersonalDetailOfUser();
  }, []);

  useEffect(() => {
    if (userProfile) {
      reset(userProfile);
    }
  }, [userProfile, reset]);




  const onSubmit = async (data) => {

    console.log('PersonalDetails.jsx', data);

    try {

      const resp = await API_WRAPPER.post(
        `api/astrologer/personalDetail`,
        data ,
      );
    console.log('PersonalDetails.jsx ',"updareaccout", resp);
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
        <h4 className="text-xl">Basic Information</h4>
        <p className="text-sm text-gray-400">
          To change your personal detail , edit and save from here
        </p>
      </div>

      {/* first row of personal details */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex gap-4">
          <div className="form-control w-full">
            <label htmlFor="firstName" className="label">
              <span className="label-text">First Name</span>
            </label>

            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("firstName")}
              type="text"
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
              name="lastName"
              id="lastName"
            />
          </div>
        </div>

        {/* second row for personal details */}
        <div className="w-full flex gap-4">
          <div className="form-control w-full">
            <label htmlFor="mobile" className="label">
              <span className="label-text">Phone mobile</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("mobile")}
              type="mobile"
              name="mobile"
              id="mobile"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="experience" className="label">
              <span className="label-text">Experience in Years</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              type="number"
              name="experience"
              id="experience"
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
              name="email"
              id="email"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="organization*" className="label">
              <span className="label-text">Organization*</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("organization")}
              type="tel"
              name="organization"
              id="organization"
            />
          </div>
        </div>
        {/* fourth row for personal details */}
        <div className="w-full flex gap-4">
          <div className="form-control w-full">
            <label htmlFor="" className="label">
              <span className="label-text">Area of Interest/Expertise *</span>
            </label>

            <input
              className="input input-sm border  border-3 border-gray-400"
              // {...register("areaOfInterest")}
              type="text"
              name=""
              id=""
            />
            <AreaOfinterest dataArray={userProfile?.areaofInterest} />
          </div>
          <div className="form-control w-full ">
            <label htmlFor="gender" className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              {...register("gender")}
              name="gender"
              id="gender"
              className="input input-sm border  border-3 border-gray-400"
            >
              <option disabled value="">
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {/* fifth row for personal details */}
        <div className="w-full flex gap-4">
          <div className="form-control w-full">
            <label htmlFor="videoType" className="label">
              <span className="label-text">Video Type</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("videoType")}
              type="videoType"
              name="videoType"
              id="videoType"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="ReviewVideo" className="label">
              <span className="label-text">Review Video Type*</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("ReviewVideo")}
              type="tel"
              name="ReviewVideo"
              id="ReviewVideo"
            />
          </div>
        </div>


        {/* sixth row for personal details */}
        <div className="w-full flex gap-4">
          <div className="form-control w-full">
            <label htmlFor="address" className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("address")}
              type="address"
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
