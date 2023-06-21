import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { changePasswordSchema } from "../../../validations";

const ChangePassword = () => {

  const initialFormValues = {
    // Define your initial values here
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
    // ...
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ 
    resolver: yupResolver(changePasswordSchema()),
    defaultValues: initialFormValues, // Set initial form values
  });

  const [errorhandler, setErrorHandler] = useState('')

  const onSubmit = async (data) => {
    setErrorHandler('')
    try {
      console.log(data);
      const resp = await axios.put(
        `http://localhost:4000/api/changePassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json", // Set the default Content-Type header
            // Add any additional headers you need
            role: JSON.parse(localStorage.getItem("user"))?.role,
            Authorization: JSON.parse(localStorage.getItem("token"))?.token,
          },
        }
      );
      console.log("Redsp",resp);
      if (resp?.data?.errorCode === 200) {
        setErrorHandler(resp?.data)
        reset(initialFormValues);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.errorCode !== 200) {
      
        setErrorHandler(error?.response?.data)
       
      }
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
      <h4 className="text-xl">Change Password</h4>
      <p className="text-sm text-gray-400">
        To change your password please confirm here
      </p>
      <div className="mt-4">
        {/* current password */}

        <form onSubmit={handleSubmit(onSubmit)}>
      
          <div className="form-control w-full">
          <p className="text-rose-600">{errorhandler?.message}</p>
            <label htmlFor="currentPassword" className="label">
              <span className="label-text">Current Password</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("currentPassword")}
              type="password"
              defaultValue={''}
              name="currentPassword"
              id="currentPassword"
            />
            <p className="text-rose-600">{errors.currentPassword?.message}</p>
          </div>
          {/* new password */}
          <div className="form-control w-full">
            <label htmlFor="newPassword" className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("newPassword")}
              defaultValue={''}
              type="password"
              name="newPassword"
              id="newPassword"
            />
            <p className="text-rose-600">{errors.newPassword?.message}</p>
          </div>

          {/* confirm password */}
          <div className="form-control w-full">
            <label htmlFor="confirmPassword" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              className="input input-sm border  border-3 border-gray-400"
              {...register("confirmPassword")}
              type="password"
              defaultValue={''}
              name="confirmPassword"
              id="confirmPassword"
            />
            <p className="text-rose-600">{errors.confirmPassword?.message}</p>
          </div>
          <button className="btn btn-primary mt-4 float-right">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;



