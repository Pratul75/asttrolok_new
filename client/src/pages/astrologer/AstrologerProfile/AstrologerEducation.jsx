import { RiDeleteBin6Line } from "react-icons/ri";
const AstrologerEducation = () => {
  return (
    <div className="p-4 shadow-md w-full font-semibold">
      <h4 className="font-semibold">Education</h4>
      <div className="flex justify-between items-center gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Degree</span>
          </label>
          <input className="input input-bordered" type="" name="" id="" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Collage/Insitute</span>
          </label>
          <input className="input input-bordered" type="" name="" id="" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Year of Completion</span>
          </label>
          <input className="input input-bordered" type="" name="" id="" />
        </div>
        <button className="btn btn-square mt-8 bg-[#5D87FF] text-white">
          <RiDeleteBin6Line />
        </button>
        <div className="mt-8"></div>
      </div>
      <div className="flex justify-end">
        <button className="btn bg-[#5D87FF] text-white mt-4">Add More</button>
      </div>
    </div>
  );
};

export default AstrologerEducation;
