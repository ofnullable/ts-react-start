import * as React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { loadUsersRequest } from '../store/actions/users';
import Users from '../components/Users';
import { AppState } from '../store/reducers';

interface UsersPageProps {
  route?: RouteConfig;
}

function UsersPage({ route }: UsersPageProps) {
  const { data, loading } = useSelector((state: AppState) => state.users.users);

  return (
    <div className="container">
      <Users users={data} loading={loading} />
      {renderRoutes(route?.routes)}
    </div>
  );
}

export const preload: Preload<null> = async ({ store }) => {
  if (!store.getState().users.users.data) {
    store.dispatch(loadUsersRequest());
  }
};

export default UsersPage;
