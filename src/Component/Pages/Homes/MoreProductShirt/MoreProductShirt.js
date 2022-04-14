import React, { useEffect, useState } from 'react';
// import Single from './Single';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './MoreProductShirt.css'
const MoreProductShirt = () => {
    // const [products,setProducts]=useState([])
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fierce-wildwood-21631.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        // <div className='container'>
        //     <h1>product: {products.length}</h1>
        //     <div class="row row-cols-1 row-cols-md-3 g-4">
        //         {
        //             products.map(product=> <Single 
        //                key={product._id}
        //                 product={product}
        //             >

        //             </Single>)
        //         }
        //     </div>
            
        // </div>


        // start 

        <div>
            <Navigation></Navigation>
        <div className="container keywords mt-5">
        <h1 className='mb-5'><span className='pro'>T-Shirt</span> Product</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
               

            {
                    products.map((offers)=>(
                        <div class="col">
                        <div class="card h-100">
                        <div className='photoShops'>
                        <img style={{width:"355px", height:"300px"}} src={`data:image/png;base64,${offers.image}`} class="card-img-top  mx-auto" alt="..."/>
                        </div>
                          <div class="card-body work">
                          
                            <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
                            <h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>
                           
                            <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>
                            
                          </div>
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
        </div>

        <Footer></Footer>
        
    </div>



        // end 
    );
};

export default MoreProductShirt;