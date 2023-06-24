import Button from "../../components/Button/Button";
import astrologerProfile from "../../assets/astrologerProfile.png";
const AstrologerAccount = () => {




  return (
    <div className="space-y-20">
      <div className=" flex flex-row justify-center space-x-24">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-2xl font-bold">Astrologer Profile</h1>
          <p className="text-xl">Change your profile picture from here</p>
          <div>
            <img src={astrologerProfile} />
            <div>
              <button className="btn btn-outline btn-error">Upload</button>
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
              <input className = "input" placeholder=" Degreee"
                id="name"
              
                type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-bold" htmlFor="name">
                email
              </label>
              <input placeholder=" Degreee"
                id="name"
              
                type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-bold" htmlFor="name">
                Biography
              </label>
              <input className = "input" placeholder=" Degreee"
                id="name"
              
                type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-24">
        <h1 className="text-2xl font-bold">Services and Specialization</h1>
        <div className="flex flex-col ">
          <label className="text-xl font-bold" htmlFor="Specialization">Specialization</label>
          <input className = "input" placeholder=" Degreee"  id="Specialization" type="text" />
          <input className = "input" placeholder=" Degreee" id="Specialization" type="text" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Education</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Degree</label>
              <input className = "input" placeholder=" Degreee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="college">College/Institute</label>
              <input className = "input" placeholder=" Degreee" id="College/Institute" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Year of Completion</label>
              <input className = "input"  placeholder=" " id="Degree" type="Number" />
            </div>
            <button className="right btn btn-primary">AddMore</button>
          </div>

        </div>
        <div>
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Organization Name</label>
              <input className = "input" placeholder="degreeee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="college">From</label>
              <input className = "input" placeholder=" Degreee" id="College/Institute" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">to</label>
              <input className = "input" placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Designation</label>
              <input className = "input" placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <button className="right btn btn-primary">AddMore</button>
          </div>

        </div>
        <div>
          <h1 className="text-2xl font-bold">Additional Work(Award)</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Awards</label>
              <input className = "input" placeholder=" Degreee" id="Degree" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="college">Description</label>
              <input className = "input" placeholder=" Degreee" id="College/Institute" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl" htmlFor="Degree">Year</label>
              <input className = "input" placeholder=" Degreee" id="Degree" type="Number" />
            </div>
            <button className="right btn btn-primary">AddMore</button>
          </div>

        </div>


      </div>

    </div>
  )
};

export default AstrologerAccount;
