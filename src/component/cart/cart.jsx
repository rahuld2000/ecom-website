import React from "react";
import { useDispatch } from "react-redux";
import { removefromcart } from "../store/slice";
import { useSelector } from "react-redux";
import "./cart.scss"
function Cart() {
  let subtotal = 0;

 
  let products = useSelector(state => state.cart)
  let dispatch = useDispatch();
  let handleclick = (products) => {
    
    dispatch(removefromcart(products))
  }
  products.map((products) => {
    subtotal += products.attributes.price
  })
 
  return (
    <div id="cart_main">
     
       <div className="cart_upper">
       <span>SHOPPING CART</span> <span><button className="close_cart" onClick={() => {
        document.getElementById("cart_main").style.display = "none"
      }}><i className="ri-close-line"></i></button></span>
       </div>
      <div className="middle_cart">
      {products.map((products) => {
      return(
        <div className='cart' key={products.id}>

<img src={products.attributes.image.data.attributes.url} width="60px" alt="error"/>
<p className="cart_title">{products.attributes.title}</p>
<p className="cart_price">{products.attributes.price} Rs</p>
<i onClick={() => handleclick(products)} class="ri-close-line"></i>

</div>
      )

       
      })}
</div>
      <div className="cart_total">
        <br />
        <hr />
        <p>SubTotal: {subtotal} Rs</p>
        <button>checkout Out</button>
      </div>
     
    </div>

  )
}
export default Cart;