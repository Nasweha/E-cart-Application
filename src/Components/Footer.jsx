import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='row bg-primary p-5'>
      <div className='col-md-3   mt-3'>
         <h4  className='text-light ' >
         <FontAwesomeIcon icon={faCartShopping} className='me-2' />SHOPSY
         </h4>
         <p className='text-light text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem labore quidem, exercitationem, dolorem deleniti odio impedit eligendi molestiae ea quasi ipsa? Corporis nesciunt est ipsum aut? Cum earum hic quisquam.</p>
      </div>
      <div className='col-md-1'></div>
      <div className='col-md-2 mt-3'>
        <h4 className='text-light mb-3'  >Link</h4>
        <div className='d-flex flex-column'>
         <Link to={'/'}> <h6 className='text-light mb-4'>Home</h6></Link>
          <Link to={'/whishlist'}><h6 className='text-light mb-4'>Whishlist</h6></Link>
         <Link to={'/cart'}> <h6 className='text-light mb-4'>Cart</h6></Link>

        </div>

      </div>
      <div className='col-md-3 mt-3   '>
      <h4 className='text-light mb-3'>Guides</h4>
        <div className='d-flex flex-column'>
          <h6 className='text-light  mb-4'>React</h6>
          <h6 className='text-light mb-4'>React Bootstrap</h6>
          <h6 className='text-light mb-4'>Bootswatch</h6>

        </div>

      </div>
      <div className='col-md-3 mt-3 '>

      <h4 className='text-light'>Contact Us</h4>
                <div className='d-flex mt-3'>
            <input type="text" placeholder='EMAIL ID' className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' className='text-light' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' className='text-light'/>
            <FontAwesomeIcon icon={faTwitter}  size='2xl'className='text-light'/>
            <FontAwesomeIcon icon={faLinkedin}  size='2xl'className='text-light'/>
        </div>


      </div>

    </div>
  )
}

export default Footer