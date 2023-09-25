import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home_com3.scss"
import { Link } from "react-router-dom";
let Home_com3 = () => {
    let [home, sethome] = useState([])
    useEffect(() => {
        const homefetch = async () => {
            try {
              const homedata = await axios.get(process.env.REACT_APP_API_URL+"/api/products?populate=*", {
                headers: { Authorization: `bearer${process.env.REACT_APP_API_TOKEN}`, },
              });
             
              sethome(homedata.data.data)
              console.log(home)
      
            } catch (error) {
      
              console.log(error)
            }
          }
       

        
        homefetch();
    }, []);
    return (
       
            <div className="home3_main">
                {
                    home.slice(0,6).map((home) => (
                        <Link to={`product/productcard/${home.id}`}>
                        <div className="card" key={home.id}>
                            <div className="card2">
                            <img src={home.attributes.image.data.attributes.url} alt="error" width="200px" />
                            <p>{home.attributes.title}</p>
                            <p>{home.attributes.price} Rs</p>
                            </div>
                        </div>
                        </Link>

                    ))
                }

            </div>
        
       
    )
}
export default Home_com3;