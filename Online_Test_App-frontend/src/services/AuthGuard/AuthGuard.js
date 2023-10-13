import { Navigate } from "react-router-dom";
import { useAuth } from "../LoginContext/LoginContext";
const AuthGuard = ({children}) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/register" replace />;
  }
 
  return children;
};

export default AuthGuard;
