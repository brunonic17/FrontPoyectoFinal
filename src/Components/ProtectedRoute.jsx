import { NavLink } from "react-router-dom"
import  { useAuth } from "../Context/AuthContext";
import ModalLoguin from "./ModalLoguin";

export const ProtectedRoute = ({children}) => {

  const { user } = useAuth();

    if (!user) {
      console.log("necesitas loguearte")
        return  (
          
            <ModalLoguin/> 
        )

    }
    return children


}


