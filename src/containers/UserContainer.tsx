import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';
import { loadUserRequest } from '../store/actions/users';
import User from '../components/User';

function UserContainer() {
  const { data, loading } = useSelector((state: AppState) => state.users.user);

  return <User user={data} loading={loading} />;
}

export const preload: Preload<{ id: string }> = async ({ store, match }) => {
  const user = store.getState().users.user;
  const needFetch = !user.data || user.data.id !== Number(match.params.id);
  if (needFetch && !user.loading) {
    store.dispatch(loadUserRequest(match.params.id));
  }
};

export default UserContainer;
