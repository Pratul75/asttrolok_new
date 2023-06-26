import { RiDeleteBin6Line } from "react-icons/ri";

const AstrologerExperience = () => {
  return (
    <div className="p-4 shadow-md max-w-full font-semibold">
      <h4 className="font-semibold">Experience</h4>
      <div className="flex  flex-wrap items-center gap-4">
        <div className="form-control flex-grow">
          <label className="label">
            <span className="label-text">Organization Name</span>
          </label>
          <input className="input input-bordered" type="" name="" id="" />
        </div>
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <div className="relative">
            <input
              className="input input-bordered pr-8"
              type="date"
              name=""
              id=""
              placeholder="From"
            />
            <div className="absolute right-2 top-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14.472l5-5V6h-2v3.472L10 12V6h-2v3.472l-5-5V10h2v3.472l5-5V18h2v-5.528z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <div className="relative">
            <input
              className="input input-bordered pr-8"
              type="date"
              name=""
              id=""
              placeholder="To"
            />
            <div className="absolute right-2 top-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14.472l5-5V6h-2v3.472L10 12V6h-2v3.472l-5-5V10h2v3.472l5-5V18h2v-5.528z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="form-control flex-grow">
          <label className="label">
            <span className="label-text">Designation</span>
          </label>
          <input
            placeholder="Enter your Designation"
            className="input input-bordered"
            type=""
            name=""
            id=""
          />
        </div>
        <button className="btn btn-square bg-[#5D87FF] text-white mt-8">
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button className="btn bg-[#5D87FF] text-white">Add More</button>
      </div>
    </div>
  );
};

export default AstrologerExperience;
