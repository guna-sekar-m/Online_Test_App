import { legacy_createStore as createStore } from 'redux';
import loginReducer from './reducers';

const Login = createStore(loginReducer);

export default Login;
