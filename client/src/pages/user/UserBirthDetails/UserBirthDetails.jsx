import { useForm } from "react-hook-form";
import BirthDetailsImage from "../../../assets/birthDetailsBanner.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { birthDetailsUpdateSchema } from "../../../validations";
import axios from "axios";

const UserBirthDetails = () => {
  const initialFormValues = {
    // Define your initial values here
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    placeOfbirth: "",
    birthTime: "",
    message: "",
    relation: "",
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

  const onSubmit = async(data)=>{
    console.log("data",data);
    if(data && !errors){
        if(data?.relation === "Self"){
             updateUserProfile(data);
        }
        else{
          // this can be of friends and family
             createProfile(data)
        }
    }
    else{

      console.log("error",errors);

    }
  }

// user profile Updates
 const updateUserProfile = async(data)=>{
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
 }
 const createProfile = async(data)=>{
  try {
   
    const resp = await axios.post(
      `http://localhost:4000/api/users/familyDetailUpate`,
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
 }


  return (
    <>
      <div>
        <div className="p-4">
          <header className="w-full h-auto bg-[#EBF3FE] rounded-lg flex justify-between relative">
            <div className="px-8 py-16">
              <h4 className="font-semibold text-2xl">Birth Details</h4>
              <p className="text-gray-500 font-light">Enter Birth Details</p>
            </div>
            <div>
              <img
                className="absolute -top-7 right-14"
                src={BirthDetailsImage}
                alt=""
              />
            </div>
          </header>

          {/* create table */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => window.addBirthDetailsModal.showModal()}
              className="btn btn-info text-white"
            >
              Add Birth Details
            </button>
          </div>
        </div>
        <dialog id="addBirthDetailsModal" className="modal">
        
          <form onSubmit={handleSubmit(onSubmit)} method="dialog w-[40vw]" className="modal-box">
            <h2 className="py-4 text-2xl">Enter Birth Details</h2>
            <hr />
            {/* first row */}
            <div className="flex gap-4">
              {/* first name */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs"
                />
              <p className="text-rose-600">{errors.firstName?.message}</p>
              </div>
              {/* last name */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="lastName" className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                />
            <p className="text-rose-600">{errors.lastName?.message}</p>
              </div>
            </div>

            {/* second row */}
            <div className="flex gap-4">
              {/* gender */}
              <div className="form-control w-full max-w-xs">
                <div className="mt-4">
                  <label
                    htmlFor="relation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <div className="mt-1">
                    <select
                      id="relation"
                      name="relation"
                      {...register("relation")}
                      className="input input-bordered w-full max-w-xs"
                    >
                      <option>Self</option>
                      <option>Family Member</option>
                      <option>Other</option>
                    </select>
                    
                  </div>
                  <p className="text-rose-600">{errors.relation?.message}</p>
                </div>
              </div>

              <div className="form-control w-full max-w-xs">
                <div className="mt-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <div className="mt-1">
                    <select
                      id="gender"
                      name="gender"
                      {...register("gender")}
                      className="input input-bordered w-full max-w-xs"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <p className="text-rose-600">{errors.gender?.message}</p>
                </div>
              </div>

              {/* last name */}
            </div>
            {/* third row */}
            <div className="flex gap-4">
              {/* Date of Birth */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="dateOfBirth" className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type here"
                  {...register("dateOfBirth")}
                  
                  className="input input-bordered w-full max-w-xs"
                />
                    <p className="text-rose-600">{errors.dateOfBirth?.message}</p>
              </div>
              {/* Place of birth*/}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="placeOfbirth" className="label">
                  <span className="label-text">Place of Birth</span>
                </label>
                <input
                  type="text"
                  id="placeOfbirth"
                  name="placeOfbirth"
                  placeholder="Type here"
                  {...register("placeOfbirth")}
                  className="input input-bordered w-full max-w-xs"
                />
              <p className="text-rose-600">{errors.placeOfbirth?.message}</p>
              </div>
            </div>
            {/* fourth row */}
            <div className="flex gap-4">
              {/* birth time */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="birthTime" className="label">
                  <span className="label-text">Birth Time</span>
                </label>
                <input
                  type="time"
                  id="birthTime"
                  name="birthTime"
                  {...register("birthTime")}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
          <p className="text-rose-600">{errors.birthTime?.message}</p>
              </div>
              {/* message */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor="message" className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  {...register("message")}
                  placeholder="max 30 characters"
                  className="input input-bordered w-full max-w-xs"
                />
            <p className="text-rose-600">{errors.message?.message}</p>
              </div>
            </div>
            <div></div>
            <button type="submit" className="btn btn-primary w-full mt-4">Add</button>
          </form>
          <form type="reset" method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Table />
      </div>
    </>
  );
};

export default UserBirthDetails;
