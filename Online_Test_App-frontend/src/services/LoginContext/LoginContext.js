import React, { useEffect,createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getuserdetails,removetoken} from '../Token/token';
import { checkiflogin } from './actions';
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(getuserdetails() ? true : false);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(checkiflogin());
  }, [dispatch]);
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    removetoken();
    setIsLoggedIn(false);
    navigate('/home');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
