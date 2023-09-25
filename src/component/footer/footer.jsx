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
                    <a className="nav_link" href="">Contact Information</a>
                    <a className="nav_link" href="">Privacy Policy</a>
                    <a className="nav_link" href="">Refund Policy</a>
                    <a className="nav_link" href="">Refund Policy</a>
                    <a className="nav_link" href="">Shipping Policy</a>
                    <a className="nav_link" href="">Terms of Service</a>
                </div>
                <div className="f_mail">
                    <p>Mailing List</p>
                    <input type="text" />
                   <button>Sign Up</button>
                </div>
                <div className="f_icon">
                    <i class="ri-twitter-x-line"></i>
                    <i class="ri-facebook-circle-fill"></i>
                    <i class="ri-mail-line"></i>
                    <i class="ri-youtube-fill"></i>
                </div>

            </div>
        </div>
    )
}
export default Footer