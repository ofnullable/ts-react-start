import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { loadUserApi, loadUsersApi } from '../../lib/api/user';
import { userActions } from './slice';

function* loadUser({ payload }: PayloadAction<string>) {
  try {
    const { data } = yield call(loadUserApi, payload);
    yield put(userActions.loadUserSuccess(data));
  } catch (e) {
    yield put(userActions.loadUserFailure(e.response?.data));
  }
}

function* watchLoadUser() {
  yield takeLatest(userActions.loadUserRequest, loadUser);
}

function* loadUsers() {
  try {
    const { data } = yield call(loadUsersApi);
    yield put(userActions.loadUsersSuccess(data));
  } catch (e) {
    yield put(userActions.loadUsersFailure(e.response?.data));
  }
}

function* watchLoadUsers() {
  yield takeLatest(userActions.loadUsersRequest, loadUsers);
}

export default function* () {
  yield all([fork(watchLoadUser), fork(watchLoadUsers)]);
}
