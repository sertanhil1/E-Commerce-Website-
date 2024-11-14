import React, { useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Delivery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  // Sayfa yüklendiğinde en üst kısmına kaydırır
  }, []);

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text2={'DELIVERY'} />
      </div>


      {/* Delivery Information */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] md:max-h-[5000px] rounded-2xl'src={assets.shipment_img} alt=""/>
        
        <p>
          <b className='text-gray-800'>Delivery Information</b>
          <p className='text-gray-600 mt-2'>We are committed to providing our customers with the best shopping experience by  carefully preparing and shipping your orders as quickly as possible. For items in  stock, your order is processed within 1-2 business days after confirmation and   dispatched for delivery. Delivery times may vary depending on your location, but  typically arrive within 3-5 business days. Once your order is shipped, you will receive  a tracking number to monitor its journey in real-time. We are here to ensure a fast,   safe, and seamless delivery experience for you!
          </p>
          <p className='text-gray-600 mt-2' >We offer multiple delivery options to meet your needs, including express and standard shipping. You can select the option that best suits your schedule and budget at checkout. If you have any questions or special delivery requests, our customer service team is here to help.
          </p>
          <p className='text-gray-600 mt-2' >Our goal is to make every delivery fast, safe, and seamless—so you can enjoy your new purchases with total peace of mind!
          </p>
        </p>
      </div>


      {/* Why Choose Us */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>


        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Fast & Reliable Delivery</b>
            <p>We understand the excitement of receiving your order quickly. That’s why we ensure fast processing times and reliable delivery, so you can enjoy your products without delay.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
            <b>Affordable Shipping </b>
            <p>We offer a variety of shipping methods to suit your needs and budget. Whether you choose our standard or express delivery, we guarantee competitive prices with no hidden fees.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
            <b>Track Your Order</b>
            <p>Stay informed with our easy-to-use tracking system. Once your order is dispatched, you’ll receive a tracking number, allowing you to follow your package every step of the way.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
            <b>International Shipping</b>
            <p>Whether you’re near or far, we’ve got you covered. We offer nationwide shipping and can deliver internationally to ensure that our products reach you no matter where you are.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
            <b>Customer Support That Cares</b>
            <p>Our dedicated customer support team is here to assist you with any questions or issues regarding your delivery. Your satisfaction is our top priority, and we’re here to ensure your experience is smooth from start to finish.</p>
          </div>
        </div>
      </div>



    <NewsletterBox/>

    </div>
  )
}

export default Delivery