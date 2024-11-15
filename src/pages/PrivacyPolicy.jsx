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
          <b>Data Security</b>
          <p>We prioritize the safety of your personal information by employing the latest encryption and security measures to protect your data from unauthorized access. Our team is dedicated to ensuring that your privacy is maintained throughout your entire shopping experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
          <b>Transparent Data Practices </b>
          <p>We believe in being transparent with our customers about how we collect, use, and store your data. We only collect the information necessary to provide you with the best service and ensure that you have a seamless shopping experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
          <b>Your Information, Your Control</b>
          <p>Your privacy is important to us, and we give you full control over your personal information. You can easily access, update, or delete your data whenever you wish, giving you peace of mind that your information is always in your hands.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ml-5'>
          <b>No Third-Party Selling</b>
          <p>We will never sell or share your personal information with third parties for marketing purposes. We respect your privacy and only use your data to process orders, improve services, and ensure timely communication regarding your purchases.</p>
        </div>
      </div>
    </div>



    <NewsletterBox/>

  </div>
  )
}

export default PrivacyPolicy