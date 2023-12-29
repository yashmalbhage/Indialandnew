import React from 'react'
import Hero from '../../components/Hero/Hero'
import Blogmain from '../../components/blogmain/Blogmain'
import Footer from '../../components/footer/fotter'
const Blog = () => {
  return (
    <div>
        <Hero
        title='Blogs'
        />

        <Blogmain/>
        <Footer/>
      
    </div>
  )
}

export default Blog
