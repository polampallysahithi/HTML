import React from "react"
import free from './images/free.png';
import gold from './images/gold.png';
import platinum from './images/platinum.png';
import professional from './images/professional.png';



const Premium = () => {
    return(
        <div>
        <section clasName="package">
            <div className="div1"><p className="select">Select Your Package</p></div>
            <main className="main2">
                <div className="div2">
                    <img src={free} alt="no img" className = "free" /> 
                    <p style={{ fontFamily:'Poppins, sans-serif', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>FREE</p><br />
                    <ul style={{ listStyleType: 'circle', marginLeft: '60px' }}>
                        <li>50 Express Interests</li>
                        <li>2 Gallery Photo Upload</li>
                        <li>0 Contact Info View</li>
                        <li>Show Auto Profile Match</li>
                    </ul>
                    <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '45px' }}>FREE <span style={{ fontSize: '20px', display: 'block', color: 'green' }}>10days</span></p><br />
                    <button className="purchase1">Purchase This Pack</button>
                </div>
                <div className="div3">
                    <img src={gold} alt="no img" className = "gold" />
                    <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Gold Package</p><br />
                    <ul style={{ listStyleType: 'circle', marginLeft: '60px'}}>
                        <li>50 Express Interests</li>
                        <li>60 Gallery Photo Upload</li>
                        <li>15 Contact Info View</li>
                        <li>Show Auto Profile Match</li>
                    </ul>
                    <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '45px'}}>50$ <span style= {{ fontSize: '20px' , display: 'block', color: 'green' }}>90days</span></p><br />
                    <button className="purchase">Purchase This Pack</button>
                </div>
                <div className="div3a">
                    <img src={platinum}alt="no img" className= "platinum" />
                    <p style={{  textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>Platinum Package</p><br />
                    <ul style={{ listStyleType: 'circle', marginLeft: '60px' }} >
                        <li>500 Express Interests</li>
                        <li>500 Gallery Photo Upload</li>
                        <li>500 Contact Info View</li>
                        <li>Show Auto Profile Match</li>
                    </ul>
                    <p style={{ fontSize:' 50px ', textAlign: 'center', marginTop: '45px'}}>200$ <span style={{ fontSize: '20px', display: 'block' , color: 'green'}}>365days</span></p><br />
                    <button className="purchase">Purchase This Pack</button>
                </div>
                <div className="div3b">
                    <img src={professional} alt="no img" className = "professional" />
                    <p style={{  textAlign: 'center' , fontSize: '20px', fontWeight: 'bold'}}>Professional Package</p><br />
                    <ul style={{ listStyleType: 'circle', marginLeft: '60px'}}>
                        <li>1000 Express Interests</li>
                        <li>1000 Gallery Photo Upload</li>
                        <li>1000 Contact Info View</li>
                        <li>Show Auto Profile Match</li>
                    </ul>
                    <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '45px'}}>300$<span style={{ fontSize: '20px', display: 'block', color: 'green'}}>790days</span></p><br />
                    <button className="purchase">Purchase This Pack</button>
                </div>
            </main>
        </section><br /><br />
        </div>

    );
}
export default Premium