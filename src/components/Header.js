import React from 'react'
import Logo from '../assets/logo.png'
import '../../src/Global.css';

const Header = () => {
    return (
        <div>
            <div style={{backgroundColor:'grey',height: 'max-content', padding: 10}}>
                <div>
                    <img src={Logo} style={{height:55,width:90}}/>
                </div>
                <div >
                    <ul className='nav-list'> 
                        <li>Home</li>
                        <li>Brand</li>
                        <li>About us</li>   
                        <li>Contact us</li>
                    </ul> 
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Header
