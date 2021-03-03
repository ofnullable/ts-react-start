import * as React from 'react';
import { useSelector } from 'react-redux';
import { userActions } from '../store/users/slice';

function User() {
  const { data: user, loading } = useSelector((state) => state.users.user);

  return loading ? (
    <p>load user...</p>
  ) : (
    user && (
      <div>
        <h1>
          {user.id} {user.username} ({user.name})
        </h1>
        <p>
          <b>email:</b> {user.email}
        </p>
      </div>
    )
  );
}

(User as Container<{ id: string }>).preload = async ({ store, match }) => {
  const userId = match.params.id;
  store.dispatch(userActions.loadUserRequest(userId));
};

export default User;
