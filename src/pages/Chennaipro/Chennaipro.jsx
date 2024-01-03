import React from 'react'
import Banner from "../../components/Banner/Banner";
import PostCard from "../../components/leftimf/Leftimg";
import Footer from "../../components/footer/fotter";
import img1 from "../../images/Chennai/1.jpg";



const Chennaipro = () => {
  return (
    <div>
          <Banner backgroundImage={img1} heading=" INDIALAND INDUSTRIAL AND LOGISTIC PARK ORAGADAM " />
      <PostCard
        imgSrc={img1}
        post=" Chennai is a bustling metro with population of 7 million and the Capital of the Southern State of Tamil Nadu. The Industrial Area, Oragadam, near Chennai is a home for a large number of Automobile companies (many of them being Fortune 500 companies), manufacturing a large range of OEM products ranging from the crucial engines to the smallest auto components. The locality has the distinction of being the largest Automobile manufacturing hub in South Asia.

        IndiaLand Industrial and Logistic Park is located in 18 acres of Land close to companies engaged in the Automobile sector who need large spaces to store and safe keep their inventories in close proximity to their manufacturing plants. The site is at a distance of just 4-5 Kms from these major companies and thus plays a pivotal role in providing all logistical and supply chain needs of these large companies.
        "
      />
      <hr></hr>

      <Footer />
      
    </div>
  )
}

export default Chennaipro
