import React from "react";
import "./home_com2.scss"
import home_img1 from "./home_img1.jpg"
import home_img2 from "./home_img2.jpg"
import home_img3 from "./home_img3.jpg"
import Carousel from "./carousel";
let Home_comp=()=>{
    return(
    <div className="main_home_img">
    <div className="h_carousel">
        <Carousel/>
    </div>
<div className="h_img_comp">\

    <img className="home_image" src={home_img1} alt="error" />
    <img className="home_image" src={home_img3} alt="error" />
    <img className="home_image" src={home_img2} alt="error" />
   
</div>
</div>
    )
}
export default Home_comp;