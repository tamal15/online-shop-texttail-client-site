import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div>
            <div className="container mb-5 p-3">
                  <h1  className="choose-head mb-5 mt-5">Categories</h1>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">T-Shirts</h2>
                {/* <h1>{id}</h1> */}
                           <div className='photoShops'>
                           <img className="image-design" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/79824431/original/f5b4c5528f3a25460b1399785592bc9c686a7b62/professionally-design-any-kinds-of-bangladeshi-t-shirt.jpg" class="card-img-top" alt="..." />
                           </div>


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Three pieces</h2>
                {/* <h1>{id}</h1> */}
                           <div className='photoShops'>
                           <img className="image-design" src="https://labane.com/wp-content/uploads/2021/04/Modern-Design-Jorjet-Three-Piece-Wholesale-For-Girls-1660_1890.jpg" class="card-img-top" alt="..." />
                           </div>


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Shirts</h2>
                {/* <h1>{id}</h1> */}
                           <div className='photoShops'>
                           <img className="image-design" src="https://sc04.alicdn.com/kf/HTB1LTHIHFXXXXbNXFXXq6xXFXXXN.jpg" class="card-img-top" alt="..." />
                           </div>


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Service;