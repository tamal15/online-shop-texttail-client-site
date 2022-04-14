import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>

<div className="footer-container data-foot">
            <div className="row">
                <div className="col-lg-3">
                    <div className="left-container text-start">
                        <div className='tm-logo'>
                            {/* <img src="http://www.logo-designer.co/wp-content/uploads/2017/10/2017-Green-Textile-rebranding-Signet-Mills-logo-design-3.png" alt="" srcset="" /> */}
                            <h3 className='ms-2 company'>Online shop (T.G.)</h3>
                        </div>
                       
                        <p className='mt-2'>Industrialization is a major reason for the economic development of a country. It plays a significant role in transforming the monetary structure of developing nations. Textile industry of Bangladesh is more than 500 years old. It is one of the oldest and most successful industries with its rich history..</p>
                            <p>
                               <h4>Contact-us</h4>
                               <div className='contact-road'>
                               <i class="fas fa-map-marker-alt"></i>
                              
                               <div className='ms-2'>
                               Gazipur, Dhaka
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i class="fas fa-phone-square-alt"></i>
                              
                               <div className='ms-2'>
                               +8801315245235, +8801315245235
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i className="fas fa-envelope"></i>
                              
                               <div className='ms-2'>
                               texttail@gmail.com
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i class="fas fa-comment-dots"></i>
                              
                               <div className='ms-2'>
                               tmbd.com
                               </div>
                               </div>
                            </p>
                    </div>
                  
                </div>
              
                <div className="col-lg-3">
            <div className="menu-container">
            <ul>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Home</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/piece" className="footer-menubar">
           <li>Three-Piece</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>shirt</li>
           </Link>
        </div>
        
           </ul>

           <h2 className='me-5 social'>Social Links</h2>

              <div className="icons-container d-flex text-center ms-2">
                            <div className="links-icons">
                            <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-youtube"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-linkedin"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-twitter-square"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-instagram-square"></i>
                            </div>
                        
                        </div> 
       </div>

       </div>

       {/* 3rd column  */}
       <div className="col-lg-3">
            <div className="menu-container">
            <ul>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/about" className="footer-menubar">
           <li>About US</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>T-shirt</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Contact-us</li>
           </Link>
        </div>
        
           </ul>

           <h5 className='download'>Download Our App</h5>
       </div>

       </div>

       {/* end  */}
       <div className="col-lg-3">
       <div className="right-footer-container">
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Dashboard</li>
           </Link>
        </div>
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Privacy Policy</li>
           </Link>
        </div>
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>FAQ</li>
           </Link>
        </div>

          
          <div className='download-apps'>
              <div className=''>
              <img src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" />
             <div className=''>
           
              <img className='mt-2' src="https://i.ibb.co/nbnHMTX/appstor.png" alt="" srcset="" />
             </div>
              </div>
        
                         {/* <img className='ms-3' src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" /> */}
          </div>
       </div>
       </div>
       <h5>Copyright Online shop(T.G.) 2022. All rights reserved. Created by Online Shop.</h5>

            </div>
        </div>

      
            
        </div>
    );
};

export default Footer;