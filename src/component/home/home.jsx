import React from "react";
import promo_video from "./home_promo.webm"
import "./home.scss";
import Home_comp from "./home_com2";
import Home_com3 from "./home_com3";
import { NavLink } from "react-router-dom";

function Home() {
 
    return ( 
      <div>
        <div className="home_main">
          <video src={promo_video} autoPlay loop muted> </video>
          <div className="home_data">
            <p>INTO THE WILD</p>
            <div className="home_btn">
            <button>
           <NavLink className="sneaker_btn" to="/sneaker" >SNEAKER</NavLink></button>
            <button>CLOTHING</button>
            </div>
            
          </div>
        </div>
         <Home_comp/>
         <Home_com3/>
         </div>
    )

}
export default Home;