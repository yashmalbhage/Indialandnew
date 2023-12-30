import React from 'react'
import Harish from '../../images/Harish.jpg'
import PostCard from '../../components/leftimf/Leftimg'
import Banner from '../../components/Banner/Banner'

const Chairman = () => {
  return (
    <div>
      <Banner backgroundImage={Harish}
      heading="Chairman's Corner"
      
      />
      <PostCard imgSrc={Harish}
        name="CHAIRMAN'S CORNER"
        post=""
        description="From thoughts to ideas.

        The Customer is at the core of our business. Every project is carefully selected and designed to delight our customers. Our technical team develops real estate to the highest quality and safety standards and exacting looks as visualized by our architects.
        
        At the core of every design is to create a stress free cheerful environment and foster innovative thinking. At IndiaLand, caring for environment is not an empty slogan; it is a part of our business strategy. Green building norms are involved from the conceptualization stage to reduce consumption of resources like electricity and water and minimize the total cost of ownership for our customers.
        
        More than anything else IndiaLand is about people. The passion and drive of IndiaLand’s employees is demonstrated in the high quality of our work. Our values foster an entrepreneurial work culture and create a platform for individuals to learn and grow with the organization.
        
        I invite you to explore Indialand.
        
        From thoughts to ideas."/>
    </div>
  )
}

export default Chairman
