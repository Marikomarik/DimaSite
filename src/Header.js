
import logo from './logo.png';
import './Header.css';
import { useState } from 'react';

export default function Header(){
    return(
    <header> 
        <div className='header-top'>
            <div className='container flex-between'>
            <div className='header-top-left'>
                <div className='header-top-left-tel'>
                    +800-123-4567 6587
                </div>
                <div className='header-top-left-adres'>
                    Beverley, New York 224 USA
                </div>
            </div>
            
            <div className='header-top-right'>
                <div className='header-top-right-text'>
                    <span>Find us on :</span>
                </div>
                <a className='header-top-right-ob'>
                    a
                </a>
                <a className='header-top-right-ob'>
                    b        
                </a>
                <a className='header-top-right-ob'>
                    c   
                </a>
                <a className='header-top-right-ob'>
                    e
                </a>
                <a className='header-top-right-ob'>
                    f
                </a>
            </div>
            </div>
        </div>
        <div className='header-bottom'>
            <div className='container flex-between'>
                <a><img src={logo}></img></a>
                <div className='header-bottom-menu'>
                    <a className='header-bottom-menu-buttons'>Home</a>
                    <a className='header-bottom-menu-buttons'>Features</a>
                    <a className='header-bottom-menu-buttons'>Community</a>
                    <a className='header-bottom-menu-buttons'>Blog</a>
                    <a className='header-bottom-menu-buttons'>Contact</a>
                </div>
                <div className='header-bottom-ls'>
                    <a className='header-bottom-log'>
                        LOG IN
                    </a>
                    <a className='header-bottom-sign'>
                        LOG IN
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}