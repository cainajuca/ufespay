import api from './api';

export const createUser = async (name, email, password) => {
  return api.post('/user', { name, email, password }).then(resp => resp.data);
};

export const deleteUser = async () => {
  return api.delete('/user').then(resp => resp.data);
};

export const updateUser = async (name, email, password) => {
  return api.put('/user', { name, email, password }).then(resp => resp.data);
};

export const getUser = async () => {
  return api.get('/user').then(resp => resp.data);
};
