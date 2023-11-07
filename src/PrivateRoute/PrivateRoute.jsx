import { useContext } from "react";
import { ContextProvider } from "../AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user}=useContext(ContextProvider);
    const location =useLocation();
    
        if(user){
            return children
        }
        else{
            return <Navigate state={location.pathname} to="/login"></Navigate>
        }
    
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;


//category
// https://i.ibb.co/C8qZdZm/category-5.png 
// https://i.ibb.co/vhpwTB7/category-4.png 
// https://i.ibb.co/m0LkqCS/category-3.png 
// https://i.ibb.co/hK4bp1Y/category-2.png 
