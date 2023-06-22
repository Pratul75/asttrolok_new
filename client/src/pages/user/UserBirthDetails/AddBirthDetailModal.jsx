const AddBirthDetailModal = () => {
  return (
    <div>
      <dialog id="add_birth_details_modal" className="modal">
        <form method="dialog" className="modal-box">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-bold text-lg">Enter Birth Details</h3>
          </div>
          {/* first row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">First Name</label>
              <input
                className="btn"
                type="text"
                name="birthDetailFirstName"
                id=""
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailLastname">Last Name</label>
              <input
                className="btn "
                type="text"
                name="birthDetailLastname"
                id=""
                placeholder="Enter your lastname"
              />
            </div>
          </div>

          {/* second row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">Gender</label>
              <select className="select border-[1px] border-gray-700">
                <option value="male">Male</option>
                <option value="fe male">female</option>
              </select>
            </div>
            <div className="form-control flex flex-col gap-2 w-full">
              <label htmlFor="birthDetailFirstName">Birth Place</label>
              <select className="select border-[1px] border-gray-700">
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
                type="date"
                className="input border-[1px] border-gray-700 px-2 py-1 rounded-md"
                name=""
                id=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Birth Time</label>
              <input
                type="time"
                className="input border-[1px] border-gray-700 px-2 py-1 rounded-md"
                name=""
                id=""
              />
            </div>
          </div>
          {/* fourth row */}
          <div className="flex justify-between w-full gap-4 mt-4">
            <div className="form-control w-full">
              <label className="label">Message</label>
              <textarea className="text-area border-[1px] border-gray-700 rounded-lg"></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">Type</label>
              <select className="select border-gray-700">
                <option value="self">Self</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-info text-white mt-6 w-full">
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
