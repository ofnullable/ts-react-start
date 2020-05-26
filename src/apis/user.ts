import api from './index';
import { AxiosPromise } from 'axios';
import { User } from '../store/models';

export const loadUserApi = (id: number): AxiosPromise<User> => {
  return api.get(`/users/${id}`);
};

export const loadUsersApi = (): AxiosPromise<User> => {
  return api.get(`/users`);
};
