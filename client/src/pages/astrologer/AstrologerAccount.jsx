import Button from "../../components/Button/Button";
import astrologerProfile from "../../assets/astrologerProfile.png";
const AstrologerAccount = () => {




  return (
    <div>
      <div className="flex flex-row justify-center ">
        <div>
          <h5>Astrologer Profile</h5>
          <p>Change your profile picture from here</p>
          <div>
          <img src={astrologerProfile} />


            <div>
             <button>Upload</button>
             <button>reset</button>
            </div>
            <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
          </div>
        </div>
        <div>
          <h5>About me</h5>
          <p>To change your personal details </p>
          <div>
            <div>
              <label htmlFor="name">
                Name
              </label>
              <input 
              id="name"
              placeholder="Mathew Anderson"
              type="text" />
            </div>
            <div>
              <label htmlFor="name">
                email
              </label>
              <input 
              id="name"
              placeholder="Mathew Anderson"
              type="text" />
            </div>
            <div>
              <label htmlFor="name">
                Biography
              </label>
              <input 
              id="name"
              placeholder="Mathew Anderson"
              type="text" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default AstrologerAccount;
