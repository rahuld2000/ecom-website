import React from "react";
import footer_bgm from "./footer_bg.mp4"
import "./footer.scss"

let Footer = () => {
    return (
        <div className="footer_main">
            <video className="footer_bg" src={footer_bgm} autoPlay loop muted></video>
            <div className="footer_data">
                <div className="f_contacts">
                    <p>Helpful Links</p>
                    <a className="nav_link" href="/">Contact Information</a>
                    <a className="nav_link" href="/">Privacy Policy</a>
                    <a className="nav_link" href="/">Refund Policy</a>
                    <a className="nav_link" href="/">Refund Policy</a>
                    <a className="nav_link" href="/">Shipping Policy</a>
                    <a className="nav_link" href="/">Terms of Service</a>
                </div>
                <div className="f_mail">
                    <p>Mailing List</p>
                    <input type="text" />
                   <button>Sign Up</button>
                </div>
                <div className="f_icon">
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-facebook-circle-fill"></i>
                    <i className="ri-mail-line"></i>
                    <i className="ri-youtube-fill"></i>
                </div>

            </div>
        </div>
    )
}
export default Footer