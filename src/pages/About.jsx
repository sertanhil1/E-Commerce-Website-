import React, { useEffect } from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0);  // Sayfa yüklendiğinde en üst kısmına kaydırır
  }, []);
  

  return (
  
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Seto, where style meets quality! Our passion for fashion drives us to bring you the latest trends and timeless classics that suit every style and occasion. We believe that clothing is more than just fabric—it's a way to express yourself, boost confidence, and make an impression.</p>
          <p>At Seto, we carefully select each piece to ensure high-quality materials, comfort, and unique designs. Our goal is to make shopping easy and enjoyable, offering a wide range of styles from casual to formal wear for both men and women.</p>
          <p>Thank you for choosing Seto for your fashion needs. We're here to help you look and feel your best, every day!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower individuals through fashion by providing high-quality, stylish, and affordable clothing that makes a statement. We strive to create a seamless shopping experience that allows you to explore and express your unique style, regardless of trends or seasons.
          Our commitment is to sustainability, quality, and customer satisfaction.We carefully select our fabrics and work with trusted partners to ensure every piece is crafted to stand the test of time. With Seto, we aim to build a community where everyone can find clothing that makes them feel confident and inspired</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality First:</b>
            <p>We handpick every item in our collection to ensure high-quality materials, comfort, and durability.</p>
          </div>
          <div className='border ml-5 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trendy and Timeless:</b>
            <p>From the latest trends to timeless classics, our range offers styles that suit every occasion and personality.</p>
          </div>
          <div className='border ml-5 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Affordable Prices:</b>
            <p>Fashion should be accessible to everyone. We offer competitive pricing without compromising on quality.</p>
          </div>
          <div className='border ml-5 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer-Centric Service:</b>
            <p>Your satisfaction is our priority. Our customer service team is here to make sure your experience is seamless and enjoyable.</p>
          </div>
          <div className='border ml-5 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Sustainable Choices:</b>
            <p>We care about the environment and take steps to offer sustainable options wherever possible.</p>
          </div>
        </div>
      </div>


      <NewsletterBox/>

    </div>
  )
}

export default About
