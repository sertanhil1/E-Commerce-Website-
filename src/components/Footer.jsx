import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
          <img src={assets.setologo}  className='w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            We are an e-commerce platform that prioritizes customer satisfaction.Our wide range of products makes your shopping experience more enjoyable.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5' >COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to='/about'>About Us</Link>
            </li>
            <li>
             <Link to='/delivery'>Delivery</Link>
            </li>
            <li>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul  className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@seto.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ seto.com - All Right Reserved.</p>
      </div>


    </div>
  )
}

export default Footer