import { CHECKIFLOGIN,LOGIN, LOGOUT } from './actions';
import { getuserdetails } from '../Token/token';
const initialState = {
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKIFLOGIN:
      const status=getuserdetails() ?true : false;
      return {
        ...state,
        isLoggedIn: status,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
