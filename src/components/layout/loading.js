import React,  { useState, useEffect } from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loading.scss'


function LoadingScreen() {

  return (
    <>

    <div className="container">
      <div className="yellow"></div>
      <div className="snake_1"></div>
      <div className="snake_2"></div>
      <div className="snake_3"></div>
      <div className="snake_4"></div>
      <div className="snake_5"></div>
      <div className="snake_6"></div>
    </div>

      </>
  );
}

export default LoadingScreen;

