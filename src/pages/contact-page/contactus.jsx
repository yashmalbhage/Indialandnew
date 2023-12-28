import React from 'react'
import Hero from '../../components/Hero/Hero'
import ContactForm from '../../components/contact/contactform'
import Footer from '../../components/footer/fotter'

const Contactus = () => {
  return (
    <div>
         <Hero
          title="Contact us"
          subtitle=""
          backgroundImage="#e09007"
        />
        <ContactForm />
        <Footer/>

      
    </div>
  )
}

export default Contactus
