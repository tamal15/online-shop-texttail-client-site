import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [product,setProduct]=useState([])
    const[control,setControl]=useState(false)
    

    useEffect(()=>{
        fetch('https://fierce-wildwood-21631.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`https://fierce-wildwood-21631.herokuapp.com/deleteManage/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=product.filter(product=>product._id !==id)
                    setProduct(remaining)
                }
            })

        }

    }

      // fetch(`https://shielded-beach-03067.herokuapp.com/deleteManage/${id}`,{
        //     method:'DELETE'
        // }).then(res=>res.json())
        // .then(data=>{
        //     if(data.deletedCount){
        //         setControl(!control)
        //     }
        // });
        // console.log(id)
        const designShow = {
            width: '18rem'
        }
    return (
        <div>
            <div className="container keywords">
                <h1 className=''><span className='pro'>T-shirt</span> Product</h1>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">

                {/* {
                        product.map((offers)=>(
                            <div class="col">
                            <div class="card h-100">
                              <img style={{width:"448px", height:"300px"}} src={`data:image/png;base64,${offers.image}`} class="card-img-top  mx-auto" alt="..."/>
                              <div class="card-body work">
                               
                              <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
                            <h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>
                               

                                  <button className="button" onClick={()=>handleDelete(offers?._id)}>Delete</button>
                                
                              </div>
                            
                            </div>
                          </div>
                                  
                                  
                                 
                               
                    
                    
                          
                     
                        ))
                    } */}

                    {/* start  */}
                    {
                        product?.map((offers)=>(
                            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card photo-shops" style={designShow}>
                                <img className="image-design" src={`data:image/png;base64,${offers.image}`} class="card-img-top" alt="..." />
                                <div class="card-body body-designs work">
                                <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
<h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>


<button className="button" onClick={()=>handleDelete(offers?._id)}>Delete</button>

                                  
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }



                    {/* end  */}
                </div>
            </div>
            
        </div>
    );
};

export default ManageProduct;