import * as React from 'react';
import { User } from '../store/models';

interface UserProps {
  user: User | null;
  loading: boolean;
}

function User({ user, loading }: UserProps) {
  return loading ? (
    <p>load user...</p>
  ) : (
    user && (
      <div>
        <h1>
          {user.username} ({user.name})
        </h1>
        <p>
          <b>email:</b> {user.email}
        </p>
      </div>
    )
  );
}

export default User;
