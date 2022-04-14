import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [service, setService] = useState([])
    const { user } = useAuth()
    const [control, setControl] = useState(false)
    // const email=user?.email

    useEffect(() => {
        fetch(`https://fierce-wildwood-21631.herokuapp.com/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure, you want to delete');
        fetch(`https://fierce-wildwood-21631.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete')
                    const remaining = service.filter(service => service._id !== id)
                    setService(remaining)
                }
            });
        console.log(id)
    }
    const designShow = {
        width: '18rem'
    }


    return (
        <div>
            <h1>My order</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">

                    {/* {
                        service?.map((offers) => (
                            <div className="col ">

                                <div className="card  w-75  ">
                                    <div className='w-75'>
                                        <img style={{ width: "448px", height: "300px" }} src={`data:image/png;base64,${offers.image}`} class="card-img-top  mx-auto" alt="..." />

                                        <div className='card-body work'>

<h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
<h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>
<h6 className="bg-danger text-white me-2 p-1 ">{offers?.status}</h6>

<button className='button' onClick={() => handleDelete(offers?._id)}>Delete</button>

</div>
                                    </div>
                                   




                                </div>
                            </div>
                        ))
                    } */}

                    {/* start  */}
                    {
                        service?.map((offers)=>(
                            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card photo-shops" style={designShow}>
                                <img className="image-design" src={`data:image/png;base64,${offers.image}`} class="card-img-top" alt="..." />
                                <div class="card-body body-designs work">
                                <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
<h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>
<h3 class="card-text text-center names">quentity: <span className='pros'>{offers.quantity}</span></h3>
<h6 className="bg-danger text-white me-2 p-1 ">{offers?.status}</h6>

<button className='button' onClick={() => handleDelete(offers?._id)}>Delete</button>

                                  
                                 
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

export default MyOrder;