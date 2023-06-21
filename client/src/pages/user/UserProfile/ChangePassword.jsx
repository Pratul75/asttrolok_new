import React from "react";

const ChangePassword = () => {
  return (
    <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
      <h4 className="text-xl">Change Password</h4>
      <p className="text-sm text-gray-400">
        To change your password please confirm here
      </p>
      <div className="mt-4">
        {/* current password */}
        <div className="form-control w-full">
          <label htmlFor="currentPassword" className="label">
            <span className="label-text">Current Password</span>
          </label>
          <input
            className="input input-sm border  border-3 border-gray-400"
            // {...register("currentPassword")}
            type="password"
            name="currentPassword"
            id="currentPassword"
          />
        </div>
        {/* new password */}
        <div className="form-control w-full">
          <label htmlFor="newPassword" className="label">
            <span className="label-text">New Password</span>
          </label>
          <input
            className="input input-sm border  border-3 border-gray-400"
            // {...register("newPassword")}
            type="password"
            name="newPassword"
            id="newPassword"
          />
        </div>

        {/* confirm password */}
        <div className="form-control w-full">
          <label htmlFor="confirmPassword" className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            className="input input-sm border  border-3 border-gray-400"
            // {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <button className="btn btn-primary mt-4 float-right">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
