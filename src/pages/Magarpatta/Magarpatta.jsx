import React from "react";
import Banner from "../../components/Banner/Banner";
import img1 from "../../images/project2.jpg";
import PostCard from "../../components/leftimf/Leftimg";
import Footer from "../../components/footer/fotter";
const Magarpatta = () => {
  return (
    <div>
      <Banner backgroundImage={img1} heading="CYBER CITY MAGARPATT" />
      <PostCard
        imgSrc={img1}
        post="CYBER CITY MAGARPATT, Pune"
        description="trategically located in the heart of Pune City, Mixed-Use Magarpatta Township is a city within a city amazingly spread over an area of 430 Acres. Bustling with commercial activity and situated on the arterial Magarpatta Road, it is easily accessible from Airport, Railway Station. A prominent, Ultra-modern, Mixed-Use facility with proximity to commercial hubs, residential neighborhoods, schools, restaurants, gardens and carries a very serene environment."
      />
      <hr></hr>

      <Footer />
    </div>
  );
};

export default Magarpatta;
