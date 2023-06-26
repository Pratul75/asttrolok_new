const AstrologerServicesAndSpecialization = () => {
  return (
    <div className="mt-4 w-full p-4 shadow-md ">
      <h4 className="font-semibold">Services and Specialization</h4>
      <div className="form-control">
        <label className="label">
          <span className="label-text ">Specialization</span>
        </label>
        <input
          className="w-full input input-bordered"
          placeholder="Enter Specialization"
          type="text"
          name=""
          id=""
        />
        <p className="text-xs text-gray-300 mt-2">
          Note: Type and Press enter to add new specialization
        </p>
      </div>
    </div>
  );
};

export default AstrologerServicesAndSpecialization;
