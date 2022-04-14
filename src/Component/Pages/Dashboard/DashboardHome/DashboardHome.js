import React from 'react';
import useAuth from '../../hook/useAuth';

import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import './DashboardHome.css'
import UserName from '../UserName/UserName';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageProduct from '../ManageProduct/ManageProduct';






const DashboardHome = () => {
    let { path, url } = useRouteMatch();
  const { admin ,logout} = useAuth()
    return (
        <div>
        <div className="dashboard-container ">
          <h2 style={{color:"white"}} className="  dashboards">Dashboard</h2>
          <div className="row">
            <div className="col-md-3 ">
              <div className="dashboard pt-3">
          
              <Link style={{textDecoration:'none',color:'white',fontSize:23}} to='/home'> Home
  
              </Link>
  
                {
                  admin &&
  
                  <div>
  
                    <Link to={`${url}/makeAdmin`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                      <li className="dashboard-menu mt-4">Make Admin</li>
                    </Link>
  
                    <Link to={`${url}/manageOrder`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                  <li className="dashboard-menu mt-4">Manage All Order</li>
                </Link>
                    <Link to={`${url}/addproducts`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                  <li className="dashboard-menu mt-4">Add Products</li>
                </Link>
  
                <Link to={`${url}/manageProduct`} style={{textDecoration:'none',color:'white', fontSize:23}}>
                  <li className="dashboard-menu mt-4">Manage Product</li>
                </Link>
  
                <Link to='/login'>
                <button className="mt-5 button" onClick={logout} color="inherit">Logout</button>
                </Link>
                  </div>
                }
  
  
                {
  
                  !admin &&
  
                  <div>
  
 
               
                <Link to={`${url}/review`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                  <li className="dashboard-menu mt-3">Review</li>
                </Link>
  
              
                 
             <Link to='/login'>
             
             <button className="mt-5 button" onClick={logout} color="inherit">Logout</button>
  
             </Link>
  
                  </div>
                }
  
  
  
              </div>
            </div>
            <div className="col-md-9 tops mt-5" >
              <Switch>
                <Route exact path={path}>
                  <UserName></UserName>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProduct`}>
                  <ManageProduct></ManageProduct>
                </AdminRoute>
                {/* <Route exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route> */}
              
             
  
  
              
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardHome;