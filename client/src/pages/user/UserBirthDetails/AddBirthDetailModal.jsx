import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { birthDetailsUpdateSchema } from "../../../validations";
import axios from "axios";

const AddBirthDetailModal = () => {




  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(birthDetailsUpdateSchema()),
  });



  const onSubmit = async (data) => {

    try {
      if (data) {
             
                

        const resp = await axios.post(
          `http://localhost:4000/api/users/newMemberBirthdetailsAdded`,
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

        if (resp) {
         console.log('AddBirthDetailModal.jsx response', resp?.data?.data);
        }
      }

    } catch (error) {
      console.log("error",error);
    }

  }

  return (
    <div>
      <dialog id="add_birth_details_modal" className="modal">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-bold text-lg">Enter Birth Details</h3>
          </div>
          {/* first row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">First Name</label>
              <input
                className="btn"
                {...register("firstName")}
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailLastname">Last Name</label>
              <input
                className="btn "
                {...register("lastName")}
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
          </div>

          {/* second row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">Gender</label>
              <select
                {...register("gender")}
                name="gender"
                id="gender"
                className="select border-[1px] border-gray-700">
                <option value="male">Male</option>
                <option value="fe male">female</option>
              </select>
            </div>
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">Birth Place</label>
              <select
                {...register("placeOfBirth")}
                name="placeOfBirth"
                id="placeOfBirth"
                className="select border-[1px] border-gray-700">
                <option value="indore">Indore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="banglore">Banglore</option>
                <option value="bhopal">Bhopal</option>
                <option value="pune">Pune</option>
              </select>
            </div>
          </div>
          {/* third row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control w-full">
              <label className="label">Date of Birth</label>
              <input
                {...register("birthDate")}
                type="date"
                name="birthDate"
                id="birthDate"
                className="input border-[1px] border-gray-700 px-2 py-1 rounded-md"

              />
            </div>
            <div className="form-control w-full">
              <label className="label">Birth Time</label>
              <input
                {...register("birthTime")}
                type="time"
                name="birthTime"
                id="birthTime"
                className="input border-[1px] border-gray-700 px-2 py-1 rounded-md"
              />
            </div>
          </div>
          {/* fourth row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control w-full">
              <label className="label">Message</label>
              <textarea
                {...register("message")}
                name="message"
                id="message"
                className="text-area border-[1px] border-gray-700 rounded-lg"></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">Type</label>
              <select
                {...register("relation")}
                name="relation"
                id="relation"
                className="select border-gray-700">
                <option value="self">Self</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-info text-white mt-6 w-full">
              submit your details
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddBirthDetailModal;
