import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import appConfigReducer from "./features/appConfig/AppSlice";
import loginResponseReducer from "./features/loginResponse/LoginResponse";
import userDetailReducer from "./features/userDetails/UserDetailsSlice";
import userAllConsultationsReducer from "./features/userAllConsultations/userAllConsultations";


export const store = configureStore({
  reducer: {
    count: counterReducer,
    appConfig: appConfigReducer,
    loginResponse:loginResponseReducer,
    userDetail:userDetailReducer,
    userConsultations:userAllConsultationsReducer
  },
});
