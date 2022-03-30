import React, { useState, Component } from "react";
import { render } from "react-dom";
import "../assets/styles/Home.css";
import bomdod from "../assets/image/pages/home/bomdod.png";
import quyosh from "../assets/image/pages/home/quyosh.png";
import peshin from "../assets/image/pages/home/peshin.png";
import asr from "../assets/image/pages/home/asr.png";
import shom from "../assets/image/pages/home/shom.png";
import xufton from "../assets/image/pages/home/xufton.png";
import Hour from "../component/Hour";
import Minute from "../component/Minute";

function Home() {
  return (
    <div className="container">
      <div className="container container-grid">
        <h2>Toshkent shahri uchun namoz vaqti</h2>
        <p> 11.03.2022 - Juma</p>
      </div>
      <div className="clock clock-time">
        <div className="namoz set-namoz">
          <p>Namoz vaqti</p>
          <div className="time set-time">
            <div className="hour">
              <h1>
                <Hour />
              </h1>
              <p>Soat</p>
            </div>
            <div className="minute">
              <h1>
                <Minute />
              </h1>
              <p>Daqiqa</p>
            </div>
          </div>
        </div>
        <div className="container-namoz">
          <div className="year">
            <h2>8 Shabon, 1443</h2>
          </div>
          <div className="namoz-time">
            <div className="bomdod">
              <img src={bomdod} alt="" />
              <p>Bomdod</p>
              <h2>05:27</h2>
            </div>
            <div className="quyosh">
              <img src={quyosh} alt="" />
              <p>Quyosh chiqishi</p>
              <h2>06:42</h2>
            </div>
            <div className="peshin">
              <img src={peshin} alt="" />
              <p>Peshin</p>
              <h2>12:33</h2>
            </div>
            <div className="asr">
              <img src={asr} alt="" />
              <p>Asr</p>
              <h2>16:39</h2>
            </div>
            <div className="shom">
              <img src={shom} alt="" />
              <p>Shom</p>
              <h2>18:25</h2>
            </div>
            <div className="xufton">
              <img src={xufton} alt="" />
              <p>Xufton</p>
              <h2>19:41</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
