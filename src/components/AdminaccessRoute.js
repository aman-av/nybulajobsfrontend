import React from "react";
import { Navigate } from "react-router-dom";

function AdminaccessRoute({ children }) {
    let val = JSON.parse(localStorage.getItem('user'));
    if (val.email!=='admin@admin.com')
        return <Navigate to='/dashboard' />
    else    
    return children;
}

export default AdminaccessRoute;