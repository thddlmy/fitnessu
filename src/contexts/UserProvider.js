import { useState, createContext, useContext } from 'react';

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const isAuthorized = sessionStorage.getItem('authorization');
  const [user, setUser] = useState(isAuthorized);

  const addUser = (token) => {
    sessionStorage.setItem('authorization', token);
    setUser(token);
  };

  const removeUser = (id) => {
    sessionStorage.removeItem('authorization');
    setUser();
  };

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
