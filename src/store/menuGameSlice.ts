import { createSlice } from "@reduxjs/toolkit";

interface INickname {
  nickname: string;
}

const initialState: INickname = {
  nickname: "",
};

const nicknameSlice = createSlice({
  name: "nickname",
  initialState,
  reducers: {
    createNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { createNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
