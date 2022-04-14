import React from 'react';
import { Link } from 'react-router-dom';
const Single = ({product}) => {
    const {name,image,_id}=product;
    return (
        <div>
            <h1>{name}</h1>

            <div class="col">
              <div class="card h-100">
                <img style={{width:"355px", height:"300px"}} src={`data:image/png;base64,${image}`} class="card-img-top  mx-auto" alt="..."/>
                <div class="card-body">
                 
                  <p class="card-text text-center">{name}</p>
                  <Link to={`/serviceDetails/${_id}`}> <button className="button">Buy Now</button></Link>
                  
                </div>
              
              </div>
            </div>
            
        </div>
    );
};

export default Single;