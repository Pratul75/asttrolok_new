import { Placeholder } from "../../../components";

const ChangeProfile = () => {
  return (
    <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
      <h4 className="text-xl">Change Profile</h4>
      <p className="text-sm text-gray-400">
        Change you profile picture from here
      </p>
      <div className="w-full h-auto flex flex-col gap-4 justify-center items-center mt-4">
        <Placeholder letter="VB" />
        <div className="flex gap-4">
          <button className="btn btn-primary"> upload</button>
          <button className="btn btn-outline btn-error">Reset</button>
        </div>
        <div>
          <p className="text-xs text-gray-400">
            Allowed JPG, GIF, PNG, Max size 800K
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
