import React from 'react'
import logoDogo from '../pics/logoDogo.png'
import dogslove2 from '../pics/dogslove2.png'
import { Link } from 'react-router-dom'

const OnBoard = () => {
    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className="box" >
                <div className="onboard">

                <h2 >Let's start with the basics</h2>
                <p className="onBoardComp">Set up your profile to meet new dogs.</p>
                <img width='300px' src={dogslove2} alt="" /><br />
                <Link to ='/username' >
                <button className="register-bottom-createProfile">NEXT</button>
                </Link>

                </div>
            </div>
        </div>
    )
}

export default OnBoard