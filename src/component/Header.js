import React from "react";
import "../assets/styles/Header.css";
import myNamaz from "../assets/image/myNamaz.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link style={{ textAlign: "none" }} to="/namaz-app">
        <div className="namaz my-namaz">
          <img src={myNamaz} alt="my-namaz" />
          <p>MyNamaz</p>
        </div>
      </Link>
      <div className="pages right-pages">
        <Link to="/ob-havo">
          <p>Ob-havo</p>
        </Link>
        <Link to="/tasbeh">
          <p>Tasbeh</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
