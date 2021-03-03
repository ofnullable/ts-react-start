import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../lib/interfaces/models';

interface UserState {
  user: BaseState<User>;
  users: BaseState<User[]>;
}

const initialState: UserState = {
  user: {
    data: null,
    loading: false,
    error: null,
  },
  users: {
    data: null,
    loading: false,
    error: null,
  },
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUserRequest(state, action: PayloadAction<string>) {
      state.user.loading = true;
      state.user.data = null;
      state.user.error = null;
    },
    loadUserSuccess(state, { payload }: PayloadAction<User>) {
      state.user.data = payload;
      state.user.loading = false;
    },
    loadUserFailure(state, { payload }) {
      state.user.error = payload;
      state.user.loading = false;
    },
    loadUsersRequest(state) {
      state.users.loading = true;
      state.users.data = null;
      state.users.error = null;
    },
    loadUsersSuccess(state, { payload }: PayloadAction<User[]>) {
      state.users.data = payload;
      state.users.loading = false;
    },
    loadUsersFailure(state, { payload }) {
      state.users.error = payload;
      state.users.loading = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
