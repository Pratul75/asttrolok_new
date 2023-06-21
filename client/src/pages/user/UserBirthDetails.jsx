import React from "react";
import BirthDetailsImage from "../../assets/birthDetailsBanner.png";
const UserBirthDetails = () => {
  return (
    <>
      <div>
        <div className="p-4">
          <header className="w-full  h-auto bg-[#EBF3FE] rounded-lg flex justify-between relative">
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
          <div className="mt-8">
            <h4 className="text-xl">Birth Details</h4>
            <form action="">
              <div className="w-full flex flex-col  sm:flex-row gap-4">
                <div className="form-control w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  {/* {console.log(userProfile)} */}
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("firstName")}
                    type="text"
                    placeholder="Name of Person"
                    // defaultValue={userProfile?.firstName}
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
                    placeholder="Last Name"
                    // {...register("lastName")}
                    type="text"
                    // defaultValue={userProfile?.lastName}
                    name="lastName"
                    id="lastName"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col  sm:flex-row gap-4">
                <div className="form-control w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  {/* {console.log(userProfile)} */}
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("firstName")}
                    placeholder="Gender"
                    type="text"
                    // defaultValue={userProfile?.firstName}
                    name="Gender"
                    id="Gender"
                  />
                </div>
                <div className="form-control w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  {/* {console.log(userProfile)} */}
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("firstName")}
                    placeholder="DD/MM/YYYY"
                    type="text"
                    // defaultValue={userProfile?.firstName}
                    name="DateofBirth"
                    id="DateofBirth"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col  sm:flex-row gap-4">
                <div className="form-control w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">Place of Birth</span>
                  </label>
                  {/* {console.log(userProfile)} */}
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("firstName")}
                    placeholder="type few characters and wait for the drop-down"
                    type="text"
                    // defaultValue={userProfile?.firstName}
                    name="PlaceofBirth"
                    id="PlaceofBirth"
                  />
                </div>
                <div className="form-control w-full">
                  <label htmlFor="lastName" className="label">
                    <span className="label-text">Birth Time</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("lastName")}
                    type="text"
                    placeholder="Time of Birth"
                    // defaultValue={userProfile?.lastName}
                    name="BirthTime"
                    id="BirthTime"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col  sm:flex-row gap-4">
                <div className="form-control w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">Message</span>
                  </label>
                  {/* {console.log(userProfile)} */}
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    // {...register("firstName")}
                    placeholder="Type things about yourself minnimum 30 words"
                    type="text"
                    // defaultValue={userProfile?.firstName}
                    name="Message"
                    id="Message"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-4 justify-start">
                <button type="submit" className="btn btn-info">
                  Submit Your Details
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-[50px] ">
          <h4 className="text-xl">Family Member Birth Details</h4>
          <form action="">
            <div className="w-full flex flex-col  sm:flex-row gap-4">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">First Name</span>
                </label>
                {/* {console.log(userProfile)} */}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("firstName")}
                  type="text"
                  placeholder="Name of Person"
                  // defaultValue={userProfile?.firstName}
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
                  placeholder="Last Name"
                  // {...register("lastName")}
                  type="text"
                  // defaultValue={userProfile?.lastName}
                  name="lastName"
                  id="lastName"
                />
              </div>
            </div>

            <div className="w-full flex flex-col  sm:flex-row gap-4">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">Gender</span>
                </label>
                {/* {console.log(userProfile)} */}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("firstName")}
                  placeholder="Gender"
                  type="text"
                  // defaultValue={userProfile?.firstName}
                  name="Gender"
                  id="Gender"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                {/* {console.log(userProfile)} */}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("firstName")}
                  placeholder="DD/MM/YYYY"
                  type="text"
                  // defaultValue={userProfile?.firstName}
                  name="DateofBirth"
                  id="DateofBirth"
                />
              </div>
            </div>

            <div className="w-full flex flex-col  sm:flex-row gap-4">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">Place of Birth</span>
                </label>
                {/* {console.log(userProfile)} */}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("firstName")}
                  placeholder="type few characters and wait for the drop-down"
                  type="text"
                  // defaultValue={userProfile?.firstName}
                  name="PlaceofBirth"
                  id="PlaceofBirth"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="lastName" className="label">
                  <span className="label-text">Birth Time</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("lastName")}
                  type="text"
                  placeholder="Time of Birth"
                  // defaultValue={userProfile?.lastName}
                  name="BirthTime"
                  id="BirthTime"
                />
              </div>
            </div>
            <div className="w-full flex flex-col  sm:flex-row gap-4">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">Message</span>
                </label>
                {/* {console.log(userProfile)} */}
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  // {...register("firstName")}
                  placeholder="Type things about yourself minnimum 30 words"
                  type="text"
                  // defaultValue={userProfile?.firstName}
                  name="Message"
                  id="Message"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-start">
              <button type="submit" className="btn btn-info">
                Submit Your Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserBirthDetails;
