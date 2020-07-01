import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
  id: number;
  username: string;
  name: string;
  email: string;
}

type UserSessionState = {
  isLoggedIn: boolean;
} & CurrentUser;

const initialState: UserSessionState = {
  id: 0,
  username: '',
  name: '',
  email: '',
  isLoggedIn: false,
};

const userSessionSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<CurrentUser>) {
      const { id, username, name, email } = action.payload;
      state.id = id;
      state.username = username;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    setUserLoggedOut(state, action: PayloadAction<null>) {
      state = initialState;
    },
  },
});

export const { setCurrentUser, setUserLoggedOut } = userSessionSlice.actions;

export default userSessionSlice.reducer;
