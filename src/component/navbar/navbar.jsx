import { useEffect, useState } from "react";
import React from "react";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "../cart/cart";

function Nav() {
  const [navbar, setnavbar] = useState(false);
  let number = useSelector((state) => state.cart);

  let scrollnav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", scrollnav);
  useEffect(() => {
    document.getElementById("cart_main").style.display = "none";
  }, []);
  return (
    <div>
      <div className={navbar ? "main" : "main active"}>
        <div className="right_component">
          <div
            onClick={() => {
              document.getElementById("l_nav").style.display = "flex";
            }}
            className="burger_menu">
            <i className="ri-menu-2-line"></i>
          </div>
          <ul id="l_nav">
            <span>
              <button
                className="close_menu"
                onClick={() => {
                  document.getElementById("l_nav").style.display = "none";
                }}
              >
                <i className="ri-close-line"></i>
              </button>
            </span>
            <li>
              <NavLink className="nav_link" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/product">
                SHOP ALL
              </NavLink>
            </li>
            <li>
              COLLECTIONS
              <ul className="dropdown">
                <li ><NavLink className="sneaker_btn" to="/sneaker">SNEAKERS</NavLink> </li>
                <li>Hodie x Anime</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h1>
            <NavLink className="nav_link" to="/">
              MERCH
            </NavLink>
          </h1>
        </div>

        <div className="left_com">
          <i className="ri-user-line"></i>
          <p
            onClick={() => {
              document.getElementById("cart_main").style.display = "flex";
            }}
          >
            <i className="ri-shopping-cart-2-line"></i>{" "}
          </p>

          <span className="dot"></span>
          <p className="cart_num">{number.length}</p>

          <Cart />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
export default Nav;
