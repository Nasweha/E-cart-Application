import React from 'react'
import { faArrowLeft, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removewishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';

function Whishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleAdd = (products)=>{
  dispatch (addCartItem(products))
  dispatch(removewishlistItem(products.id))
  }

  return (


    <div className='row p-4 mb-5'>
     { wishlistArray.length > 0 ?
     wishlistArray.map((products)=>(<div className='col-md-3'>
     <Card style={{ width: '18rem' }} className='shadow' >
       <Card.Img variant="top" src={products.image} style={{ height: '200px' }} />
       <Card.Body>
         <Card.Title>{products.title.slice(0,25)}</Card.Title>
         <Card.Text>
         {products.description.slice(0,50)}
         </Card.Text>
         <p><b>{products.price}</b></p>
         <div className='d-flex justify-content-between align-items-center '>

           <Button onClick={()=>dispatch(removewishlistItem(products.id))} className='bg-light rounded border-danger' ><FontAwesomeIcon icon={faTrash} style={{ color: "#e60a0a", }} /></Button>
           <Button onClick={()=>handleAdd(products)} className='bg-light rounded border-success'><FontAwesomeIcon icon={faCartShopping} style={{ color: 'green' }} /></Button>
         </div>
       </Card.Body>
     </Card>
   </div>))
     :



      <div className='d-flex justify-content-center align-items-center w-100  '>
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column w-100 ">
          <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty-cart" width={'150px'} />
          <h4 className='text-danger'> Your whishlist is empty</h4>
          <Link to={'/'}>
            <button className='btn btn-success p-3 rounded mt-3'><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", }} className='me-2' />Back to home</button></Link>
        </div>

        <div className="col-md-4"></div>


      </div>}
    </div>

  )
}

export default Whishlist