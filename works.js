import React from "react";
import  img1 from './images/signup.png';
import  img2 from './images/connect.png';
import  img3 from './images/chat.jpg';
import './navbar.css';


const  Works = () => {
    return(
        <section className="section1">
            
                <div className="div4">
                    <h1 className="h1">How it works</h1>
                    <p className="p1" style={{ color: 'rgb(66, 62, 62)'}}>When you realize you want to spend the rest of your life with somebody,you want  <br />the rest of your life to start as soon as possible.</p>
                </div>
            
            <div className="part2">
                <div className="div5">
                    <img className="img1" src={img1} alt="" />
                    <div className="division1">
                        <h1 className="h2">1.Sign up </h1>
                        <p className="p2" style={{ color: 'rgb(46, 43, 43)' }}> Register for free and put up your profile</p>
                    </div>
                </div>
                <div className="div6">
                    <img className="img2" src= {img2}  alt="" />
                    <div className="division2">
                        <h1 className="h3">2.Connect </h1>
                        <p className="p3" style={{ color: 'rgba(46, 43, 43)'}}> Select and Connect with Matches youe like</p>
                    </div>
                </div>
                <div className="div7">
                    <img  className="img3" src={img3} alt="" />
                    <div className="division3">
                        <h1 className="h4">3.Interact </h1>
                        <p  className="p4" style={{ color: 'rgba(46, 43, 43)'}}> Become a Premium Member and Start a conversation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Works