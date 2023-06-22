import { useForm } from "react-hook-form";
import BirthDetailsImage from "../../../assets/birthDetailsBanner.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { birthDetailsUpdateSchema } from "../../../validations";
import axios from "axios";
import BirthDetailsSidebar from "./BirthDetailsSidebar";
import BirthDetailsContactDetails from "./BirthDetailsContactDetails";

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

  const onSubmit = async (data) => {
    console.log("data", data);
    if (data && !errors) {
      if (data?.relation === "Self") {
        updateUserProfile(data);
      } else {
        // this can be of friends and family
        createProfile(data);
      }
    } else {
      console.log("error", errors);
    }
  };

  // user profile Updates
  const updateUserProfile = async (data) => {
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
  const createProfile = async (data) => {
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
  };

  return (
    <>
      <div>
        <div className="p-4 shadow-md">
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
          {/* secondary header */}
          <div className="w-full p-8 shadow-md rounded-lg mt-16 flex justify-between">
            <div className="relative">
              <select
                className="w-48 py-2 pl-3 pr-8 text-sm leading-5 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                name="sort-by"
                id="sort-by"
              >
                <option value="default">Sort By</option>
                <option value="name">A-Z</option>
                <option value="price">Z-A</option>
                <option value="date">Date</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-6-6 1.5-1.5L10 9.5l4.5-4.5L16 6l-6 6z"
                  />
                </svg>
              </div>
            </div>
            <button className="btn btn-info text-white">
              Add Birth Details
            </button>
          </div>

          {/* content component */}
          <div className="w-full flex gap-1">
            <BirthDetailsSidebar />
            <BirthDetailsContactDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBirthDetails;
