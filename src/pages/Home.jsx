import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addwishlistItem } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/slices/cartSlice';


function Home() {
  const dispatch = useDispatch()

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  
  return (
    <div className='row p-4'>
     {  data?.length>0?
     data?.map((products)=>(
      <div className='col-md-3 mb-5'>
      <Card style={{ width: '16rem' }} >
        <Card.Img variant="top" src={products.image} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{products.title.slice(0,25)}</Card.Title>
          <Card.Text>
           {products.description.slice(0,50)}
          </Card.Text>
          <p ><b>{products.price}</b></p>
          <div className='d-flex justify-content-between align-items-center '>

            <Button onClick={()=>dispatch(addwishlistItem(products))}  className='bg-light rounded border-danger'><FontAwesomeIcon icon={faHeart} style={{ color: "#e00000", }} /></Button>
            <Button onClick={()=>dispatch(addCartItem(products))} className='bg-light rounded border-success'><FontAwesomeIcon icon={faCartShopping} style={{ color: 'green' }} /></Button>
          </div>
        </Card.Body>
      </Card>
   </div>
     ))
    
    
    

     :<p> Loading</p>
    }
      
    </div>
  )
}

export default Home