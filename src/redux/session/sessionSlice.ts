import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

export type JWT = string;

export interface SessionState {
  token?: JWT;
  email?: string;
  username?: string;
  picture?: string;
  isFirstDonateAchievement?: boolean;
  isFirstProfitAchievement?: boolean;
}

const initialState: SessionState = {
  isFirstDonateAchievement: false,
  isFirstProfitAchievement: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setFirstDonateAchievement(state) {
      state.isFirstDonateAchievement = true;
    },
    setFirstProfitAchievement(state) {
      state.isFirstProfitAchievement = true;
    },
    setToken(state, action: PayloadAction<JWT>) {
      state.token = action.payload;

      const { email, name, picture } = jwt_decode(action.payload) as {
        email: string;
        name: string;
        picture: string;
      };

      state.email = email;
      state.username = name;
      state.picture = picture;
    },
    clearCurrentSessionData(state) {
      state.token = undefined;
      state.email = undefined;
      state.username = undefined;
      state.picture = undefined;
      state.isFirstDonateAchievement = false;
      state.isFirstProfitAchievement = false;
    },
    logOut(state) {
      sessionSlice.caseReducers.clearCurrentSessionData(state);
    },
  },
});

export const {
  setToken,
  logOut,
  clearCurrentSessionData,
  setFirstDonateAchievement,
  setFirstProfitAchievement,
} = sessionSlice.actions;

export default sessionSlice.reducer;
