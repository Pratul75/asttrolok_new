import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { birthDetailsUpdateSchema } from "../../../validations";
import { useSelector } from "react-redux";
import { useEffect } from "react";




const BirthDetailsContactDetails = () => {
 const details = useSelector((state)=>state?.userDetail?.data) 
   console.log('BirthDetailsContactDetails.jsx', details);

  const initialFormValues = {
    // Define your initial values here
    firstName: details?.firstName,
    lastName: details?.lastName,
    gender: details?.gender,
    dateOfBirth: details?.dateOfBirth,
    placeOfbirth: details?.placeOfbirth,
    birthTime: details?.birthTime,
    message: details?.message,
    relation: details?.relation,
    // ...
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(birthDetailsUpdateSchema()),
    defaultValues: initialFormValues, // Set initial form values
  });

useEffect(()=>{
  const initialFormValues = {
    // Define your initial values here
    firstName: details?.firstName,
    lastName: details?.lastName,
    gender: details?.gender,
    dateOfBirth: details?.dateOfBirth,
    placeOfbirth: details?.placeOfbirth,
    birthTime: details?.birthTime,
    message: details?.message,
    relation: details?.relation,
    // ...
    reset(initialFormValues)
  };

},[])



  return (
    <div className="w-2/3 h-auto mt-4 shadow">
      {/* first row */}
      <div className=" border-b-[1px] p-8 h-auto w-full flex justify-between items-center">
        <div>
          <h3 className="text-[18px] font-semibold">Birth Details</h3>
        </div>
        <div className="flex gap-4">
          <AiOutlineStar className="cursor-pointer" />
          <MdOutlineModeEdit className="cursor-pointer" />
          <RiDeleteBin7Line className="cursor-pointer" />
        </div>
      </div>
      {/* second row */}
      <div className="p-8">
        <div className="flex items-center gap-5">
          <div className="avatar placeholder">
            <div className="bg-primary hover:bg-primary-focus text-neutral-content rounded-full w-24 cursor-pointer">
              <span className="text-3xl">VB</span>
            </div>
          </div>
          <div className="font-semibold">
            <h4 className="text-[18px] font-semibold text-2xl">
              Vishesh 
            </h4>
          </div>
        </div>
      </div>
      {/* third-row */}
      <div className="p-8">
        <div>
          <hr className="mt-4" />
        </div>
        <div>
          {/* first sub row */}
          <div className="flex justify-between gap-4 mt-4">
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
                Last Name
              </label>
              <input
                type="text"
                name=""
                id="firstName"
                className="input border-[1px] border-gray-800"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          {/* second sub row */}
          <div className="flex justify-between gap-4 mt-4">
            <div className="form-control w-full flex">
              <label htmlFor="selectLabel " className="label">
                Gender
              </label>
              <select
                name="selectLabel"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label htmlFor="lastName" className="label">
                Place of Birth
              </label>
              <select
                name="selectLabel"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                ¯<option>Indore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Banglore</option>
                <option>Pune</option>
              </select>
            </div>
          </div>
          {/* third sub row */}
          <div className="flex justify-between gap-4 mt-4">
            <div className="form-control w-full">
              <label htmlFor="firstName" className="label">
                Date of Birth
              </label>
              <input
                type="date"
                name=""
                id="firstName"
                className="input border-[1px] border-gray-800 "
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="lastName" className="label">
                Birth Time
              </label>
              <input
                type="time"
                name=""
                id="firstName"
                className="input border-[1px] border-gray-800"
              />
            </div>
          </div>
          {/* second sub row */}
          <div className="flex justify-between gap-4 mt-4">
            <div className="form-control w-full flex">
              <label htmlFor="selectLabel " className="label">
                Type
              </label>
              <select
                name="selectLabel"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Self</option>
                <option>Family</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label htmlFor="lastName" className="label">
                Message
              </label>
              <textarea
                rows={1}
                className="textarea border-[1px] border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      {/* fourth row */}
      <div className="p-8">
        <div className="flex gap-4">
          <button className="btn bg-[#5D87FF] text-white">Edit</button>
          <button className="btn btn-outline btn-error">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BirthDetailsContactDetails;
