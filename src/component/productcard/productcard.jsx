import React from "react";
import "./productcard.scss"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/slice";

let Productcard = () => {
   let dispatch=useDispatch();

    const {id} =useParams();
   const [CardImage,setcardimg] = useState([]);
    let [datacard, setdatacard] = useState([]);
    const [cartproducts,setcartproducts]=useState([])
    useEffect(() => {
  
      let carddata = async () => {
        try {
          const cardfetch = await axios.get(process.env.REACT_APP_API_URL+`/api/products?filters[id][$eq]=${id}&populate=*`, {
            headers: { Authorization: `bearer${process.env.REACT_APP_API_TOKEN}`, },
          });
          
          setdatacard(cardfetch.data.data[0].attributes)
          setcartproducts(cardfetch.data.data[0])
    setcardimg(cardfetch.data.data[0].attributes.image.data.attributes.url)
        } catch (error) {
  
         
        }
      }
      carddata();
    }, []);
  
let addproduct =(cartproducts)=>{
   dispatch(addtocart(cartproducts))
}
   
    return (
        <div className="product_main">
            <div className="product_img">
                <img className="card_img" src={CardImage} alt="error" />
            </div>
     
            <div className="pcard_data">
                <p className="main_title">{datacard.title}</p>
                <p className="p_price">Rs {datacard.price}</p>
                <hr />
                <p className="p_size">size</p>
                <div className="pbtn_size">
                    <button className="btn_size1">small</button>
                    <button className="btn_size1">medium</button>
                    <button className="btn_size1">large</button>
                    <button className="btn_size1">X-large</button>
                </div>
                <button onClick={() => addproduct(cartproducts)} className="btn_buy">ADD TO CART</button>
                <br />
                <div className="p_desc">
                    <ul>
                        <li>Cotton/Polyester blend pullover hoodie</li>
                        <li>Light Blue pullover hoodie with multi-color ink print </li>
                        <li>Featuring the ‘Into The Wild’ design</li>
                    </ul>
                    <table>
                        <tr>
                            <th>SIZE</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>2XL</th>
                            <th>3Xl</th>
                        </tr>
                        <tr>
                            <td>chest</td>
                            <td>20"</td>
                            <td>22"</td>
                            <td>24"</td>
                            <td>26"</td>
                            <td>28"</td>
                            <td>30"</td>

                        </tr>
                        <tr>
                            <td>Length</td>
                            <td>27"</td>
                            <td>28"</td>
                            <td>29"</td>
                            <td>30"</td>
                            <td>31"</td>
                            <td>32"</td>
                        </tr>
                    
                    </table>
                
                </div>
            </div>
        </div>
    )
}
export default Productcard