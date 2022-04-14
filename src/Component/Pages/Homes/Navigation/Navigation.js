import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../hook/useAuth';
const Navigation = () => {
  const {user,logout}=useAuth()
    return (
        <div>

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src="http://www.logo-designer.co/wp-content/uploads/2017/10/2017-Green-Textile-rebranding-Signet-Mills-logo-design-3.png" alt="" width="50" height="49" className="d-inline-block align-text-top "/>
                <span className="ms-3 ">Online Shop(T.G.)</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                  
                    <Link className="nav" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link className="nav" to="/about">About</Link>
                  </li>

                  <li className="nav-item dropdown drop-button topper">
          <Link className="nav-link dropdown-toggle drops-buttons topper" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu tops long" aria-labelledby="navbarDropdown">
            <li className='long'><Link className="dropdown-item long" to="/piece">Three-Piece</Link></li>
           
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item long" to="/more">T-shirt</Link></li>
          </ul>
        </li>

        <li className="nav-item">
                  <Link className="nav" to="/contact">Contact</Link>
                   </li>
                 
                
                  <li className="nav-item">
                  {/* <Link className="nav" to="/login">Login</Link> */}
                  {
                       
                       user?.email ?
                       <div className='p-2'>
                         
                         <NavLink  style={{textDecoration:'none',color:'white', margin:4 }} to='/dashboard'>
                         <button className='button' color="inherit">Dashboard</button>
                       </NavLink>
           
                       <button className='button' onClick={logout} color="inherit">Logout</button>
                       </div>
                      
                     
                       :
                       <NavLink style={{textDecoration:'none',color:'white'}} to='/login'>
                       <button className='button' color="inherit">Login</button>
                       </NavLink>
                     
                     
                  }
                
               
                  </li>
                
                  {/* <li className="nav-item">
                  <Link className="nav" to="/piece">Three-Piece</Link>
                  </li> */}
                  {/* <li className="nav-item">
                  <Link className="nav" to="/service">Services</Link>
                  </li> */}



                
                 
                
                </ul>
               
              </div>
            </div>
          </nav>


    
            
        </div>
    );
};

export default Navigation;