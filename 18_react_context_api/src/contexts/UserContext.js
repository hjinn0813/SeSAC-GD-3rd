import { createContext } from 'react';

const defaultUser = {
  name: 'layla',
  setName: () => {},
};

export const UserContext = createContext(defaultUser);
