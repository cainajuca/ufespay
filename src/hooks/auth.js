import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const user = {name: 'Luma', email: 'luma@gmail.com'};
  const token = 'sjdfns';
  const isLogged = true;
  
  return (
    <AuthContext.Provider value={{ user, token, isLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};