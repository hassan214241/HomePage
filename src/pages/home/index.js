import React from "react";
import "./style.css";
import { MdClose } from "react-icons/md";
import { BsInstagram, BsTwitter, BsFacebook, BsJustify } from "react-icons/bs";
export const Home = () => {
  return (
    <div className="main-container">
      <div class="nav-area">
        <input type="checkbox" id="box" />
        <label for="box" class="btn-area">
          <BsJustify />
        </label>
        <label class="logo">BEVOE</label>
        <ul>
          <li>
            <a>Newsletter</a>
          </li>
          <li>
            <a>Signup</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="search-bar">
          <input type="text" className="input" />
          <button className="close">
            <MdClose />
          </button>
        </div>
        <div className="content-warp">
          <div className="warp-1">
            <h1>
              Simple weather,
              <br />
              for cool people
            </h1>
            <h5>
              A new way to look at weather so you can
              <br />
              quickly figure out what to wear
            </h5>
            <div className="a-link">
              <a className="Privacy">Privacy</a>
              <a className="Privacy">Terms</a>
            </div>
          </div>
          <div className="warp-2">
            <button className="circle-1"></button>
            <br />
            <button className="circle-2"></button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="footer">
        <div className="footer-content">
          <h1>COMING SOON!</h1>

          <h4>Sign up to know when it's out and follow our journey</h4>
          <lab className="label">First Name</lab>
          <input
            type="text"
            placeholder="First Name"
            className="footer-input"
          />
          <lab className="label1">Email</lab>
          <input type="text" placeholder="Email" className="footer-input" />
          <button className="sign-btn">Signup</button>
        </div>
        <div className="soical-link">
          <a>
            <BsFacebook size={30} />
          </a>
          <a>
            <BsInstagram size={30} />
          </a>
          <a>
            <BsTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
