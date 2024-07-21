import './navbar.css';

const  Navbar = () =>{
    return( 
        <nav>
            <section className="top1">
                    <header className="head1">
                            <div className ="logo" ><img src = "https://static.vecteezy.com/system/resources/previews/019/906/473/non_2x/wedding-ring-graphic-clipart-design-free-png.png"alt = "reactimg"/><p className="mrandmrs">Mr & Mrs Matrimony</p>
                            <ul className="ulitems1">
                                <li className="liitems1"><a href="./index.js" class="anchortag1">HOME</a></li>
                                <li className="liitems2"><a href="./premium.js" target="_blank" class="anchortag2">PREMIUM PLANS</a></li>
                                <li className="liitems3" ><a href="./happystories.js" target="_blank" class="anchortag3">HAPPY STORIES</a></li>
                                <li className="liitems4"><a href="./contact.js" class="anchortag4">CONTACT US</a></li>
                                <div className="login">
                                    <li className="liitems5"><button class="button1"><a href="login.html" class="anchortag5">LOGIN</a></button></li>
                                    <li className="liitems6"><button class="button2"><a href="register.html" class="anchortag6">REGISTER</a></button></li>
                                </div>
                            </ul>
                        </div>
                    </header>
            <div align="center" className="loginbox2"><br />
                    <form  className="forma" style={{ borderRadius : '25px', marginLeft : '800px' }} ><br />
                        <h2 align="center" style={{ color:  'rgba(255, 207, 129)' }}>Login Page</h2><br />
                        <button style={{ backgroundColor:  'rgba(255, 207, 129)' ,  width: '40%' , height: '10%' , fontWeight: '700' ,borderRadius: '6px' , color: 'white' , borderColor: 'rgba(255, 207, 129)' }}>Login</button>
                        <button style={{ backgroundColor: 'white' , color: 'rgba(255, 207, 129)' , width: '40%' , height: '10%' , fontWeight: '700', borderRadius: '6px', borderColor: 'white' }}>Signup</button><br /><br /> 
                        <input type="email" placeholder="Email Address" className="inputa" /> <br /><br />
                        <input type="password" placeholder="Password" className="inputb" /> <br/>
                        <a href="" align="left" style={{ marginRight : '5%',  textDecoration: 'none' ,color: 'rgba(255, 207, 129)' , textDecoration: 'none' }}> Forgot Password?</a><br /><br /><br />
                        <button style={{backgroundColor : 'rgba(255, 207, 129)' , width: '80%', height: '10%', fontWeight: '700', borderRadius: '6px', color: 'white', borderColor: 'rgba(255, 207, 129)' }}> Login </button><br /><br />
                        <p style={{ color: 'rgba(74, 71, 71)' }}>Not a member? <span style={{ color: 'rgba(255, 207, 129)',textDecoration: 'none' }}><a href="main.html" style={{ color: 'rgba(255, 207, 129)' ,textDecoration: 'none' }}>Register now</a></span></p>
                    </form>
             </div>          
                        
        </section>
        </nav>
    )
}
export default Navbar;