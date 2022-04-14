import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CustomerProduct = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
 
  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleStatus=(e)=>{
      setStatus(e.target.value)
  }
  console.log(status);
  useEffect(() => {
    fetch("https://fierce-wildwood-21631.herokuapp.com/myOrder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // const status = "apporved";
  const handleOrderId = (id) => {
    // setOrderId(id);
    fetch(`https://fierce-wildwood-21631.herokuapp.com/statusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({status}),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        alert('successfully Update')
      });
    console.log(id);
  };


//   delete 
const handleDelete=(id)=>{
    const proceed=window.confirm('are you sure, you want to delete');
    if(proceed){
        fetch(`https://fierce-wildwood-21631.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('delete');
                const remaining=orders.filter(product=>product._id !==id)
                setOrders(remaining)
            }
        })

    }

}
  


  return (
    <div className="container">
      <Container>
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>quantity</th>
            <th> Price</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Customer-Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.quantity}</td>
              <td>{pd.price}</td>
              <td>{pd.number}</td>
              <td>{pd.address}</td>
              <td>{pd.names}</td>
              <td>{pd.date}</td>
              {/* <td>{pd.image}</td> */}
              <td>
              <input onChange={handleStatus} type="text" defaultValue={pd.status}/>
              <button onClick={()=>handleOrderId(pd._id)} className="btn bg-dark text-white me-2">Update</button>
              </td>
              {/* <button className="btn bg-danger p-2">Delete</button> */}
              <button className="btn bg-info text-white p-2" onClick={()=>handleDelete(pd?._id)}>Delete</button>
           
            </tr>
          </tbody>
        ))}
      </Table>

      </Container>


    
    </div>
  );
};

export default CustomerProduct;
