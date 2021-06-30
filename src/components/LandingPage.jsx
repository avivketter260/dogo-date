import logoDogo from '../pics/logoDogo.png'
import mainDog from '../pics/landingPageDogo.png'
import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    const buttnon = {

        top: '116%',
        left:'18%',
    }

    return (
        <div className="landing-container">
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
                <div className="signIn">
                    <span>Have an account?</span>
                    <Link to='/sign-in'>
                    <button className="button-sign-in">Sign in</button>
                    </Link>
                </div>
            </div>
            <div className="main">

                <div className="right">
                    <img className="dogo-img" src={mainDog} alt="" />
                </div>
                <div className="left">
                    <h1 className="title">DATING DESERVES BETTER</h1>
                    <p>On Dogo Date, you’re more than just a Dog. You have barking  to bark,
                        and bonds to share, and things to sniff around.
                        Get noticed for who you are, not what you look like. Because you deserve better.</p>
                    <br />
                    <span style={{ lineHeight: 'none' }}>By clicking Join, you agree to <a href="/"> our Terms.</a>  <br /> 
                    Learn how we process your data in <br />
                     our <a href="/"> Privacy Policy and Cookies  Policy.</a></span>
                    <Link  to='/signup' >
                    <button style={buttnon} className="register-bottom">JOIN DOGO-DATE</button>
                    </Link>
                </div>

            </div>
            <div className="footer">
                <p>
                    © Dogo Date | Aviv Ketter</p>
            </div>
        </div>
    )

}

export default Landing