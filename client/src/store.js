import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import appConfigReducer from "./features/appConfig/AppSlice";
import loginResponseReducer from "./features/loginResponse/LoginResponse";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    appConfig: appConfigReducer,
    loginResponse:loginResponseReducer,
  },
});
