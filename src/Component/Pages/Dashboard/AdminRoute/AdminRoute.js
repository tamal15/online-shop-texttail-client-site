
import React from 'react';
import { Redirect, Route } from 'react-router';

// import { Spinner } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading,admin}=useAuth()
    // if(!admin){
    //     return <Spinner animation="border" variant="danger" />
    // }
    return (
        <Route
        {...rest}
        render={({location})=>
            user.email && admin ? children
            : <Redirect
            to={{
                pathname:"/",
                state:{from:location}
            }}
                       
            ></Redirect>}
        >
            
        </Route>
    );
};

export default AdminRoute;