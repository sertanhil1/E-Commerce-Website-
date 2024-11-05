import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

  

  const {products} = useContext(ShopContext);
  const [bestSeller,setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0,6))
  },[])


  return (
    
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat cum, fugit laudantium minima similique deserunt recusandae sed quos harum culpa maxime! Veniam, ullam soluta eveniet dolorem a iusto inventore tenetur!
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gp-y-5'>
        {
          bestSeller.map((item,index)=>(
            <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
          
        }
      </div>
    </div>
  )
}





export default BestSeller