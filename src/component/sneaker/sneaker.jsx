import React, { useEffect, useState } from "react";
import "../products/product.scss"
import { Link } from "react-router-dom";

import axios from "axios";
function Sneaker() {
 
  const [product, setProduct] = useState([])
  useEffect(() => {

    const fetchdata = async () => {
      try {
        const database = await axios.get(process.env.REACT_APP_API_URL+"/api/products?filters[type][$eq]=sneaker&populate=*", {
          headers: { Authorization: `bearer${process.env.REACT_APP_API_TOKEN}`, },
        });
       
        setProduct(database.data.data)


      } catch (error) {

        console.log(error)
      }
    }
    fetchdata();
  }, []
  );

 
  return (
    <div className="shop_main">
      <div className="shop_grid">
        {product.map((product) => (
          <div className='card' key={product.id}>
          <Link to={`/productcard/${product.id}`}>
            <div className="card2">
              <img src={product.attributes.image.data.attributes.url} width="150px" alt="error" />
              <p>{product.attributes.title}</p>
              <p>{product.attributes.price}</p>
            </div>
            </Link>
        
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sneaker;