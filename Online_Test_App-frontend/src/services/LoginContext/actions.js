export const CHECKIFLOGIN = 'CHECKIFLOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const checkiflogin = () => ({
  type: CHECKIFLOGIN,
});
export const loginAction = () => ({
  type: LOGIN,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
