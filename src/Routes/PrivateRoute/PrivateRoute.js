import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

/*
1. Only allow authenticated user to visit the route
2.
3. Redirect user to the route they wanted to go before login

*/


const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;