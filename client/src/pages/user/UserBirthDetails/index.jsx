import { useForm } from "react-hook-form";
import BirthDetailsImage from "../../../assets/birthDetailsBanner.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { birthDetailsUpdateSchema } from "../../../validations";
import axios from "axios";
import BirthDetailsSidebar from "./BirthDetailsSidebar";
import BirthDetailsContactDetails from "./BirthDetailsContactDetails";
import AddBirthDetailModal from "./AddBirthDetailModal";
import { useSelector } from "react-redux";
import { Header } from "../../../components";
const UserBirthDetails = () => {
  const birthDetailsOfSelectedMember = useSelector(
    (state) => state?.userDetails
  );
  console.log("UserBirthDetails.jsx", birthDetailsOfSelectedMember);
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
      console.log("UserBirthDetails.jsx", resp, "get");
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

      console.log("UserBirthDetails.jsx", "post", resp);
      if (resp?.data) {
        console.log(resp?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const OthersBirthDetail = async (data) => {
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

      console.log("UserBirthDetails.jsx", "post", resp);
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
          <Header
            bannerImage={BirthDetailsImage}
            primaryText="Birth Details"
            secondaryText="Enter Birth Details"
          />
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
            </div>
            <button
              onClick={() => window.add_birth_details_modal.showModal()}
              className="btn btn-info text-white"
            >
              Add Birth Details
            </button>
          </div>

          {/* content component */}
          <div className="w-full flex-wrap md:flex-nowrap md:flex gap-4">
            <BirthDetailsSidebar />
            <BirthDetailsContactDetails />
          </div>
        </div>
      </div>
      <AddBirthDetailModal />
    </>
  );
};

export default UserBirthDetails;
