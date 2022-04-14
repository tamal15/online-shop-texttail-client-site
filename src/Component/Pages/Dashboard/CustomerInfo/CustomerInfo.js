import React, { useEffect, useState } from 'react';

const CustomerInfo = () => {
    const [customer,setCustomer]=useState([])

    useEffect(()=>{
        fetch('https://fierce-wildwood-21631.herokuapp.com/contact')
        .then(res=>res.json())
        .then(data=>setCustomer(data))
    },[])
    return (
        <div className='container'>
            <h1>Customer <span className='pro'>Information</span></h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
            {
                    customer.map((offers)=>(
                        <div class="col">
                        <div class="card h-100">
                         
                          <div class="card-body work">
                           
                            <h3 class="card-text text-center names">Name: <span className="pro">{offers.name}</span></h3>
                            <h3 class="card-text text-center names">Message: <span className='pro'>{offers.message}</span></h3>
                            <h3 class="card-text text-center names">Email: <span className='pro'>{offers.email}</span></h3>
                            <h3 class="card-text text-center names">Address: <span className='pro'>{offers.address}</span></h3>
                            <h3 class="card-text text-center names">Number: <span className='pro'>{offers.number}</span></h3>
                           
                           
                            
                          </div>
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
            
        </div>
    );
};

export default CustomerInfo;