import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const ProtectedRoute = () => {
  const {  loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated)
if(loading) return <h1>Loading...</h1>
  if (!loading && !isAuthenticated) {

    return <Navigate to="/loguin" replace />;
  }
  return  <Outlet/>
};
