import React from 'react'
import Hero from '../../components/Hero/Hero'
import ContactForm from '../../components/contact/contactform'
import Footer from '../../components/footer/fotter'
import Banner from '../../components/Banner/Banner'
import img1 from '../../images/contactpage.jpg'
const Contactus = () => {
  return (
    <div>
         <Banner backgroundImage={img1} heading="Contact us"/>
        <ContactForm />
        <Footer/>

      
    </div>
  )
}

export default Contactus
