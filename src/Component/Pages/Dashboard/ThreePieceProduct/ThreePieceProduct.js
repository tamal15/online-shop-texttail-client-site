import React, { useEffect, useState } from 'react';
// import Single from './Single';
import { Link } from 'react-router-dom';
import './ThreePieceProduct.css'

const ThreePieceProduct = () => {
    // const [products,setProducts]=useState([])
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fierce-wildwood-21631.herokuapp.com/threePices')
        .then(res=>res.json())
        .then(data=>{
            const sliceData=data.slice(0,6)
            setProducts(sliceData)
        })
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
          
        <div className="container keywords">
            <h1 className=' hitings'><span className='choose-head'>Three-Piece</span> Product</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                    products.map((offers)=>(
                        <div class="col">
                        <div class="card h-100 ">
                         <div className='photoShops'>
                         <img style={{width:"353px", height:"300px"}} src={`data:image/png;base64,${offers.image}`} class="card-img-top  mx-auto" alt="..."/>
                         </div>
                          <div class="card-body work">
                       
                            <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
                            <h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>

                            <Link to="/piece"> <button className="button">MoreProduct</button></Link>
                           
                            <Link to={`/service/${offers._id}`}> <button className="button">Buy Now</button></Link>
                            
                          </div>
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
        </div>
        
    </div>



        // end 
    );
};

export default ThreePieceProduct;