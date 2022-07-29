import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import AuthSlice from "./slices/auth-slice";
import UISlice from "./slices/ui-slice";

const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
