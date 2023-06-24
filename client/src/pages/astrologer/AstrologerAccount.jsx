import Button from "../../components/Button/Button";
import astrologerProfile from "../../assets/astrologerProfile.png";
import deleteButton from "../../assets/deletButton.svg";

const AstrologerAccount = () => {
  return (
    <div className="space-y-20">
  
      <div className=" flex flex-row justify-center space-x-24">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-2xl font-bold">Astrologer Profile</h1>
          <p className="text-xl">Change your profile picture from here</p>
          <div className="space-y-6">
            <img className="ml-6" src={astrologerProfile} />
            <div className="space-x-6">
              <button className=" btn-outline  btn btn-primary">Upload</button>
              <button className="btn btn-outline btn-error">reset</button>
            </div>
            <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-6">
          <h5 className="text-2xl font-bold">About me</h5>
          <p className="text-xl">To change your personal details </p>
          <div className="space-y-5">
            <div className="flex flex-col ">
              <label className="text-xl font-bold" htmlFor="name">
                Name
              </label>
              <input placeholder=" Degreee" id="name" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-bold" htmlFor="name">
                email
              </label>
              <input placeholder=" Degreee" id="name" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-bold" htmlFor="name">
                Biography
              </label>
              <input placeholder=" Degreee" id="name" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-24">
        <div className="flex flex-col ">
        <h1 className="text-2xl font-bold space-y-10">Services and Specialization</h1>
          <label className="text-xl  font-semibold" font-medium htmlFor="Specialization">
            Specialization
          </label>
          <input
            placeholder=" Degreee"
            className=""
            id="Specialization"
            type="text"
          />
          <p>Note: Type & Press enter to add new specialization</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Education</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Degree
              </label>
              <input placeholder=" Degreee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="college">
                College/Institute
              </label>
              <input
                placeholder=" Degreee"
                id="College/Institute"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Year of Completion
              </label>
              <input placeholder=" Degreee" id="Degree" type="Number" />
            </div>

            <button className="right btn btn-primary">AddMore</button>
          </div>
        </div>

      

        <div>
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Organization Name
              </label>
              <input placeholder="degreeee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="college">
                From
              </label>
              <input
                placeholder=" Degreee"
                id="College/Institute"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                to
              </label>
              <input placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Designation
              </label>
              <input placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <button className="right btn btn-primary">AddMore</button>
          </div>
        </div>
        <div>

          <h1 className="text-2xl font-bold">Additional Work(Award)</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Awards
              </label>
              <input placeholder=" Degreee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="college">
                Description
              </label>
              <input
                placeholder=" Degreee"
                id="College/Institute"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-xl" htmlFor="Degree">
                Year
              </label>
              <input placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <button className="right btn btn-primary">AddMore</button>
          </div>
        </div>
        <div className="flex flex-row justify-end  space-x-5">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-error">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AstrologerAccount;
