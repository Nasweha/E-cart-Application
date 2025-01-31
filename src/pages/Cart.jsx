import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const [total,setTotal]= useState(0)
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getTotal=()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)) 
    
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCheckout = ()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }


  return (


    <>
     { cartArray.length > 0 ?
     <div className='row mt-5 '>
        <div className="col-md-1"></div>
      
        <div className="col-md-7 mt-5 mb-5 " >
          <table className='shadow w-100 py-4' >
            <thead >
              <tr>
                <th>#</th>
                <th>product</th>
                <th>Image</th>
                <th>price</th>
                <th>Action</th>
              </tr>

            </thead>
            <tbody>
              {cartArray.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img src={item.image} alt="" width={'130px'} height={'130px'} /></td>
                <td>₹{item.price}</td>
                <td><button onClick={()=>dispatch(removeCartItem(item.id))} className='btn btn-outline-danger rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
              ))}
              

            </tbody>

          </table>
        </div>
        <div className="col-md-3 mt-5 mb-5">
          <div className='shadow p-3'>
            <h2 className='text-primary mb-3'>Cart summary </h2>
            <h5>Total number of products:<span className='text-warning'>{cartArray.length} </span></h5>
            <h4>Price:<span className='text-warning'>₹{total}</span></h4>
            <button className='rounded btn btn-success mt-4 w-100'onClick={handleCheckout}>Check Out</button>
          </div>
        </div>
        <div className="col-md-1"></div>



       

      </div>:

      <div className='d-flex justify-content-center align-items-center w-100  mb-5 '>
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column w-100 ">
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty-cart" />
            <h4 className='text-danger'> Your whishlist is empty</h4>
            <button className='btn btn-success p-3 rounded mt-3'><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", }} className='me-2' />Back to home</button>
          </div>

          <div className="col-md-4"></div>


        </div>}

    </>
  )
}

export default Cart