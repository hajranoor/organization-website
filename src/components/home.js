import React from 'react';
import './home.css';
import mountainImage from '../assets/mountain3.jpg'
import logo from '../assets/HKC_LOGO.png'
import beigeAndBlack from '../assets/beigeAndBlack.png'

const Home = () => {
    return (
        <div className = "mainBg">
            {/* <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav> */}
            <div className="content">
                <div className="text-section">
                    <h1>Hunar Ki Chotiyan</h1>
                    <p>Empowering Mountain Minds, One Skill at a Time</p>
                </div>
                <div className="image-section">
                    <img src= {beigeAndBlack} alt="Cute Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Home;
