import React from 'react';
// import our1 from './images/getcompleteinformation.svg';
// import our2 from './images/getmorematches.svg';
// import our3 from './images/enable.svg';
import  our1 from './images/signup.png';
import  our2 from './images/connect.png';
import  our3 from './images/chat.jpg';


const Works_part2 = () => {
    return(
        
        <section className="aboutus">
            <section className="us1">
                <section className="us2">
                       
                </section>
                <section style={{ width: '800px' , height: '500px' }} className="us3">
                    <div style= {{ marginLeft: '50px', width: '130px'}} >
                        <img src={our1} alt="" className="our1" style={{ display: 'block' }} />
                        <img src={our2} alt=""  className="our2" style={{ display: 'block'}} />
                        <img src={our3} alt="" class="our3" style={{ display: 'block' }} />
                    </div>
                    <section className="us4">
                        <div className="we1">
                            <h1 style={{ fontSize: '20px', color: 'rgba(56, 49, 49)'}}>Get Complete Family Information</h1>
                            <p>You will find detailed family information in every profile. Knowing the family will help you take the next step with confidence.</p>
                        </div>
                        <div className="we2">
                            <h1 style={{ fontSize: '20px',  color: 'rgba(56, 49, 49)'}}>Get Matches from your Community</h1>
                            <p>With over 80 community sites, you can find a Match from your community. Finding a Match based on caste and religion made easy.</p>
                        </div>
                        <div className="we3">
                            <h1 style={{ fontSize: '20px' ,  color: 'rgba(56, 49, 49)' }}>Enable your search without any barrier</h1>
                            <p>Embark on your journey to find your perfect match now available in multiple languages.</p>
                        </div>
                    </section>
                </section>
            </section>   
        </section>    
    )
}

export default Works_part2