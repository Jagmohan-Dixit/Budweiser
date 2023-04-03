import React from 'react';
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import img from "../../Assets/bg.jpg";

const Home = () => {
  return (
    <div class="record-display">
        <Navbar />
        <div style={{ backgroundImage: `url(${img})` }} />
    </div>
  )
}

export default Home