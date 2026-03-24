import React from "react";
import heroImg from "../assests/images/hero.jpg";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className="vh-100 d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      
      <div className="container">
        <h5>We have been serving</h5>
        <h1 className="display-3 fw-bold">Coffee of the Day</h1>
        <p>Since 1950</p>
        <button 
            className="btn btn-warning btn-lg"
            onClick={() => navigate("/menu")}
            >
            Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;