import { combineReducers } from '@reduxjs/toolkit';
import users from './users/slice';

const reducer = combineReducers({
  users: users.reducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
