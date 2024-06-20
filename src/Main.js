import './Main.css'
import ludi from './01.png'
import member from './01.jpg'
import date1 from './date1.png'
import step1 from './step1.png'
import stories1 from './stories1.jpg'
export default function Main(){
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

            </div>
        </div>
    )
}
