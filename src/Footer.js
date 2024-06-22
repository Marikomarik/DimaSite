import './Footer.css'
import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'
import f21 from './f-2-1.jpg'
import r1 from './r1.jpg'
import r2 from './r2.jpg'
import r3 from './r3.jpg'

export default function Footer() {
    return (
        <footer>
            <div className='f-1'>
                <div className='container'>
                    <ul>
                        <li>
                            <img src={f1}></img>
                            <p>Phone Number : +88019 339 702 520</p>
                        </li>
                        <li>
                            <img src={f2}></img>
                            <p>Email : admin@turulav.com</p>
                        </li>
                        <li>
                            <img src={f3}></img>
                            <p>Address : 30 North West New York 240</p>
                        </li>
                    </ul>
                </div>  
            </div>
            <div className='container f-2'>
                <div className='About'>
                    <h2>About TuruLav</h2>
                    <p>
                        Energistically coordinate highly efficient procesr partnerships befor revolutionar growth strategie improvement viaing awesome
                    </p>
                    <img src={f21}>
                    </img>
                </div>
                <div className='RecNew'>
                    <h2>Our Recent News</h2>
                    <ul>
                        <li>
                            <img src={r1}>
                            </img>
                            <div>
                                <p>Enable Seamin Matera Forin And Our Orthonal Create Vortals.</p>
                                <span>July 23, 2021</span>
                            </div>      
                        </li>
                        <li>
                            <img src={r2}>
                            </img>
                            <div>
                                <p>Enable Forin And Our Orthonal Create Vortals.</p>
                                <span>July 23, 2021</span>
                            </div>      
                        </li>
                        <li>
                            <img src={r3}>
                            </img>
                            <div>
                                <p>Dynamca Network Otuitive Catays For Plagiarize Mindshare After.</p>
                                <span>July 23, 2021</span>
                            </div>      
                        </li>
                    </ul>
                </div>
                <div className='Newsletter'>
                    <h2>Our Newsletter Signup</h2>
                    <p>
                        By subscribing to our mailing list you will always be update with the latest news from us.
                    </p>
                    <input type='text' placeholder="Enter Your email *"></input>
                    <button>Send massage</button>
                </div>
            </div>
            <div className='footer'>
                © 2022 <span>TuruLav</span> -Best For Dating React Template.
            </div>
        </footer>
    )
}