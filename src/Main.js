import './Main.css'

export default function Main(){
    return(
        <div className='main'>
            <div className='container flex'>
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
            </div>
        </div>
    )
}
