import React from 'react';
import './Choose.css'
const Choose = () => {
    return (
        <div>
           
            <div className='container'>
            <h1 className='choose-head'>
            Our Professional Services
            </h1>
            
                <div className='row mt-5'>
                  <div className='col-lg-4'>
                  <div className="text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-user"></i>
    <h3 className="card-title deliver">T-shirt Delivery</h3>
    <p className="card-text choose-menu">This is a same day delivery service saturday to Thursday between 11AM-4PM</p>
  </div>
</div>

                  </div>
                  <div className='col-lg-4'>
                  <div className="text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-user"></i>
    <h3 className="card-title deliver">Three Piece Delivery</h3>
    <p className="card-text choose-menu">This is a same day delivery service saturday to Thursday between 11AM-4PM</p>
  </div>
</div>

                  </div>

                  {/* 3rd  */}
                  <div className='col-lg-4'>
                  <div className=" text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-user"></i>
    <h3 className="card-title deliver">Shirt Delivery </h3>
    <p className="card-text choose-menu">This is a same day delivery service saturday to Thursday between 11AM-4PM</p>
  </div>
</div>

                  </div>

                  {/* end  */}
               
                
                </div>
            </div>
        </div>
    );
};

export default Choose;