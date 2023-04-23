import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    
     let user = JSON.parse(localStorage.getItem('user'));

    if (!user)
    return <Navigate to='/' />
    else if (user.type != 'admin' && user.type != 'terraformer')
        return <Navigate to='/dashboard'/>
    else
    return children;
}

export default ProtectedRoute;