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