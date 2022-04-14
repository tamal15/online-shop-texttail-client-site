import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddThreePices = () => {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('');
    const [image,setImage]=useState(null);
    const [add,setAdd]=useState('')

    const handleSubmit = e=>{
        e.preventDefault();
        // const { register, handleSubmit ,reset} = useForm();
        if(!image){
            return;
        }
        const formData=new FormData();
        formData.append('name',name)
        formData.append('price',price)
        formData.append('image',image)

        fetch('https://fierce-wildwood-21631.herokuapp.com/threePices',{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
             if(data.insertedId){
                swal("Successful!", "Add successfully product!", "success");
                
             }
        })
        .catch(error=>{
            console.error("Error",error)
        })
    }
    return (
        <div>
            <h1 className='mb-5'>Add <span className='pro'>Three-piece</span></h1>
            <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='name' className='emails'>
              Name:
            </label>
            <br />
            <input
              type='name'
              name='name'
            
              onChange={e=>setName(e.target.value)}
              required
              className=' outline-none px-3 py-2 '
            />
          </div>
             <div>
            <label htmlFor='price' className='emails'>
              Price:
            </label>
            <br />
            <input
              type='price'
              name='price'
              id='email'
              onChange={e=> setPrice(e.target.value)}
              required
              className=' outline-none px-3 py-2 '
            />
          </div>

          <div>
            <label htmlFor='email' className='emails'>
              Image:
            </label>
            <br />
            <input
              type='file'
              accept='image/*'
            //   id='email'
              onChange={e=>setImage(e.target.files[0])}
            //   required
              className=' outline-none px-3 py-2 '
            />
          </div>
          <button type='submit'>Upload</button>
            </form>
        </div>
    );
};

export default AddThreePices;