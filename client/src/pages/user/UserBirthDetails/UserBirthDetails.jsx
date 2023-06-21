import BirthDetailsImage from "../../../assets/birthDetailsBanner.png";
import { Table } from "../../../components";

const UserBirthDetails = () => {
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
          <form method="dialog w-[40vw]" className="modal-box">
            <h2 className="py-4 text-2xl">Enter Birth Details</h2>
            <hr />
            {/* first row */}
            <div className="flex gap-4">
              {/* first name */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* last name */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* second row */}
            <div className="flex gap-4">
              {/* gender */}
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
                      className="input input-bordered w-full max-w-xs"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* last name */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* third row */}
            <div className="flex gap-4">
              {/* Date of Birth */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* Place of birth*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Place of Birth</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* fourth row */}
            <div className="flex gap-4">
              {/* birth time */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Birth Time</span>
                </label>
                <input
                  type="time"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* message */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="max 30 characters"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label
                  htmlFor="gender"
                  className="block  text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <div className="mt-1">
                  <select
                    id="gender"
                    name="gender"
                    className="input input-bordered w-full max-w-xs"
                  >
                    <option>Self</option>
                    <option>Family Member</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-4">Add</button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Table />
      </div>
    </>
  );
};

export default UserBirthDetails;
