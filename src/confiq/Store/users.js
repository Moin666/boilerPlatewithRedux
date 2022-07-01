import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loader: false,
  },
  reducers: {
    usersAdded: (users, action) => {
      users.list = action.payload.data;
    },
  },
});

export const { usersAdded } = slice.actions;
export default slice.reducer;

///selector

// export const selectUnresolvedProjects = (state) =>
//   state.entities.projects.filter((item) => item.resolved == false);
