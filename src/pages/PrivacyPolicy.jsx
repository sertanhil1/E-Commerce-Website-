import React, { useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  // Sayfa yüklendiğinde en üst kısmına kaydırır
  }, []);

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'PRIVACY'} text2={'POLICY'} />
      </div>


    {/* Delivery Information */}
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      

      <img className='w-full md:max-w-[500px] md:h-[600px] object-cover rounded-2xl md:order-last md:ml-auto'src={assets.privacy_policy_img} alt=""/>
      
      <p>
        <b className='text-gray-800'>Privacy Policy</b>
        <p className='text-gray-600 mt-2'>
          We are committed to protecting your privacy and ensuring a secure online shopping experience. We collect and use your personal information solely for processing your orders and  improving our services. Your details, such as name, address, and payment information, are securely stored and never shared with third parties without your consent. We implement   strict security measures to protect your data from unauthorized access or disclosure. By using our services, you agree to the collection and use of your information as outlined  in this policy. Your privacy is important to us, and we are dedicated to keeping your personal information safe and confidential.
        </p>
        <br />
        <b className='text-gray-800'>How We Use Your Information</b>
        <p className='text-gray-600 mt-2'>
          We use the personal information we collect for the following purposes:<br></br>
          - To process your orders and deliver products to you.<br></br>
          - To communicate with you regarding your orders, including sending tracking information.<br></br>
          - To improve our website, services, and customer support.<br></br>
          - To send promotional materials, updates, or offers if you have opted-in to receive such communications.<br></br>
          - To protect our business and users by detecting and preventing fraud or other illegal activities.
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

export default PrivacyPolicy