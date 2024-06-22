import './Main.css'
import ludi from './01.png'
import member from './01.jpg'
import date1 from './date1.png'
import step1 from './step1.png'
import stories1 from './stories1.jpg'
import recent1 from './recent1.jpg'
import customers1 from './customers1.png'
import downl from './downl.png'
import ap from './ap.png'
import { useState } from 'react';

export default function Main(){
    const [isOpen11, setOpen11] = useState(false);
    const [isOpen12, setOpen12] = useState(false);
    const [isOpen21, setOpen21] = useState(false);
    const [isOpen22, setOpen22] = useState(false);
    const [isOpen31, setOpen31] = useState(false);
    const [isOpen32, setOpen32] = useState(false);
    const [isOpen41, setOpen41] = useState(false);
    const [isOpen42, setOpen42] = useState(false);
    const [isOpen51, setOpen51] = useState(false);
    const [isOpen52, setOpen52] = useState(false);
    const [isOpen61, setOpen61] = useState(false);
    const [isOpen62, setOpen62] = useState(false);

    return(
        <div className='main'>
            <div className='first-baner'>
                <div className='main-first container flex-between'>
                    <div className='main-reg'>
                        <div className='main-reg-text'>
                            <h3>Introducing TuruLav</h3>
                            <p>Serious Dating With TuruLav Your Perfect Match is Just a Click Away.</p>
                        </div>
                        <ul className='main-reg-ul'>
                            <li>
                                <span>I am a</span>
                                <select>
                                    <option value="0">Select Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </li>
                            <li>
                                <span>Looking for</span>
                                <select>
                                    <option value="0">Select Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </li>
                            <li>
                                <span>Age</span>
                                <div className='age-b'>
                                    <select className='age1'>
                                        <option value="0">18</option>
                                        <option value="1">19</option>
                                        <option value="2">20</option>
                                        <option value="3">21</option>
                                    </select>
                                    <select className='age'>
                                        <option value="0">18+</option>
                                        <option value="1">19</option>
                                        <option value="2">20</option>
                                        <option value="3">21</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <span>Looking for</span>
                                <input type='text' placeholder="Your City Name.."></input>
                            </li>
                        </ul>
                        <button type='submit' className='main-reg-find'>
                            <span>Find Your Partner</span>
                        </button>
                        <div className='main-reg-insert'>
                            <button>Continue with google</button>
                            <button>a</button>
                            <button>b</button>
                        </div>
                    </div>
                    <img src={ludi}></img>
                </div>
            </div>
            <div className='container'>
                <h2>Meet New People Today!</h2>
                <h1>New Members in London</h1>
                <div className='members'>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={member}></img>
                        <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                </div>
                <div className='members-buttons'>
                    <a>Join us for free</a>
                    <a>Our Tv Commercial</a>
                </div>
            </div>
            <div className='first-baner'>
                <div className='container date'>
                    <h1>It All Starts With A Date</h1>
                    <h2>About Our Turulav</h2>
                    <ul className='date-inf'>
                        <li>
                            <img src={date1}></img>
                            <span>
                                <h1>29,991</h1>
                                <p>Members in Total</p>
                            </span>
                        </li>
                        <li>
                            <img src={date1}></img>
                            <span>
                                <h1>29,991</h1>
                                <p>Members in Total</p>
                            </span>
                        </li>
                        <li>
                            <img src={date1}></img>
                            <span>
                                <h1>29,991</h1>
                                <p>Members in Total</p>
                            </span>
                        </li>
                        <li>
                            <img src={date1}></img>
                            <span>
                                <h1>29,991</h1>
                                <p>Members in Total</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='secound-baner'>
                <div className='container'>
                    <h2>How Does It Work?</h2>
                    <h1>You’re Just 3 Steps Away From A Great Date</h1>
                    <ul className='steps'>
                        <li>
                            <img src={step1}></img>
                            <h2>Create A Profile</h2>
                            <p>Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound.</p>
                        </li>
                        <li>
                            <img src={step1}></img>
                            <h2>Create A Profile</h2>
                            <p>Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound.</p>
                        </li>
                        <li>
                            <img src={step1}></img>
                            <h2>Create A Profile</h2>
                            <p>Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='first-baner'>
                <div className='container stories'>
                    <h2>Love in Faith Success Stories</h2>
                    <h1>Sweet Stories From Our Lovers</h1>
                    <ul>
                        <li>
                            <img src={stories1}></img>
                            <span>Image Post Formate</span>
                            <p>
                                Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                            </p>
                            <button>
                                Read More
                            </button>
                        </li>
                        <li>
                            <img src={stories1}></img>
                            <span>Image Post Formate</span>
                            <p>
                                Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                            </p>
                            <button>
                                Read More
                            </button>
                        </li>
                        <li>
                            <img src={stories1}></img>
                            <span>Image Post Formate</span>
                            <p>
                                Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                            </p>
                            <button>
                                Read More
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container memb-onl'>
                <h2>Tip Members</h2>
                <h1>Turulav Members Online Now</h1>
                <div className='memb-onl-but'>
                    <button>Show all</button>
                    <button>New girl member</button>
                    <button>New boy member</button>
                </div>
                <div className='memb-onl-bl'>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                    <div className='member'>
                            <img src={member}></img>
                            <div>
                            <a>Andrea Guido</a>
                            <p>Active 1 Day</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='first-baner'>
                <div className='container recent'>
                    <h2>Recently Active Groups</h2>
                    <h1>Turulav 4 Best Active Group</h1>
                    <ul>
                        <li>
                            <img src={recent1}></img>
                            <div className='recent-bl'>
                                <span>Active Group A1</span>
                                <p>
                                    Colabors atively fabcate best breed and apcations through visionary value
                                </p>
                                <button>
                                    View Group
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={recent1}></img>
                            <div className='recent-bl'>
                                <span>Active Group A1</span>
                                <p>
                                    Colabors atively fabcate best breed and apcations through visionary value
                                </p>
                                <button>
                                    View Group
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={recent1}></img>
                            <div className='recent-bl'>
                                <span>Active Group A1</span>
                                <p>
                                    Colabors atively fabcate best breed and apcations through visionary value
                                </p>
                                <button>
                                    View Group
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={recent1}></img>
                            <div className='recent-bl'>
                                <span>Active Group A1</span>
                                <p>
                                    Colabors atively fabcate best breed and apcations through visionary value
                                </p>
                                <button>
                                    View Group
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <h2>What our Customers Say</h2>
                <h1>Client’s Feed back Latest Reviews From My Clients</h1>
                <div className='customers'>
                    <ul>    
                        <li className='customer1' onMouseEnter={() => setOpen11(true)} onMouseLeave={() => setTimeout(()=> setOpen11(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen12(true)} onMouseLeave={() => setOpen12(false)} className={`${isOpen11 || isOpen12 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                        <li className='customer2' onMouseEnter={() => setOpen21(true)} onMouseLeave={() => setTimeout(()=> setOpen21(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen22(true)} onMouseLeave={() => setOpen22(false)} className={`${isOpen21 || isOpen22 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                        <li className='customer3' onMouseEnter={() => setOpen31(true)} onMouseLeave={() => setTimeout(()=> setOpen31(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen32(true)} onMouseLeave={() => setOpen32(false)} className={`${isOpen31 || isOpen32 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                        <li className='customer4' onMouseEnter={() => setOpen41(true)} onMouseLeave={() => setTimeout(()=> setOpen41(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen42(true)} onMouseLeave={() => setOpen42(false)} className={`${isOpen41 || isOpen42 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                        <li className='customer5' onMouseEnter={() => setOpen51(true)} onMouseLeave={() => setTimeout(()=> setOpen51(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen52(true)} onMouseLeave={() => setOpen52(false)} className={`${isOpen51 || isOpen52 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                        <li className='customer6' onMouseEnter={() => setOpen61(true)} onMouseLeave={() => setTimeout(()=> setOpen61(false), 50)}>    
                            <img src={customers1}></img>
                            <div onMouseEnter={() => setOpen62(true)} onMouseLeave={() => setOpen62(false)} className={`${isOpen61 || isOpen62 ? "active" : ""} toggle`}>
                                Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className='color'>
                <div className='container download'>
                    <div className='first'>
                        <h2>
                            Download App Our Turulav
                        </h2>
                        <h1>
                            Easy Connect to Everyone
                        </h1>
                        <p>
                            You find us, finally, and you are already in love. More than 5.000.000 around the world already shared the same experience andng ares uses our system Joining us today just got easier!
                        </p>
                        <ul>
                            <li>
                                <img src={ap}></img>
                                <p>Avaliable on the<br></br><strong>App Store</strong></p>
                            </li>
                            <li>
                                <img src={ap}></img>
                                <p>Avaliable on the<br></br><strong>Google play</strong></p>
                            </li>
                        </ul>
                    </div>
                    <img src={downl}></img>
            </div>
            </div>
        </div>
    )
}
