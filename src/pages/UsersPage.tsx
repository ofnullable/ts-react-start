import * as React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import Users from '../components/Users';
import { userActions } from '../store/users/slice';

interface UsersPageProps {
  route?: RouteConfig;
}

function UsersPage({ route }: UsersPageProps) {
  const { data, loading } = useSelector((state) => state.users.users);

  return (
    <div className="container">
      <Users users={data} loading={loading} />
      {renderRoutes(route?.routes)}
    </div>
  );
}

(UsersPage as Container<UsersPageProps>).preload = async ({ store }) => {
  if (!store.getState().users.users.data) {
    store.dispatch(userActions.loadUsersRequest());
  }
};

export default UsersPage;
