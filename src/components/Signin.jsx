import React, { useState, useEffect } from 'react'
import logoDogo from '../pics/logoDogo.png'
import { Link } from 'react-router-dom'
export default function Signin() {
    const [allUseres, setAllusers] = useState([])
    const [isEmail, setIsEmail] = useState(false)
    const [userEmail, setUserEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isReg, setIsReg] = useState(false)
    const [userName, setUserName] = useState('')
    useEffect(async () => {
        const data = await fetch('http://localhost:3001/email')
        const response = await data.json()
        setAllusers(response)
    }, [])

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log('hey');
        if (!isEmail && !isPassword) {
            setIsReg(true)
        }

    }


    const emailChange = (e) => {
        const email = e.target.value
        setIsEmail(false)
        allUseres.map(user => {
            if (user.email === email) {
                setUserEmail(email)
                setIsEmail(true)
                return setUserName(user.username)
            }


        })

    }

    const passwordChange = (e) => {
        const password = e.target.value
        setIsPassword(false)
        allUseres.map(user => {
            if (user.password === password && user.email === userEmail ) {
                return setIsPassword(true)
            }
        })
    }
    console.log(allUseres);
    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className="login">
                <form className='form-style' onSubmit={handelSubmit}>
                    <input style={isEmail ? { borderBottom: ' 1px solid green' } : null} className='login-input' name='email' type="email" placeholder='email...' onChange={emailChange} />
                    <input style={isPassword ? { borderBottom: ' 1px solid green' }:null} className='login-input' name='password' type="password" placeholder='password...' onChange={passwordChange} />
                    {isEmail && isPassword ? <span className='animation-p'>Wellcome {userName}</span> : null}
                    {isEmail && isPassword ?
                        <Link to='/main-page'>
                            < button style={{ width: '100%' }} className='log-in-button'>Sign-in</button>
                        </Link>
                        : < button className='log-in-button'>Sign-in</button>}
                    {isReg ? <p className="animation-p2" >Something went worng <Link to='/signup'>register?</Link></p> : null}
                </form>
            </div>
        </div>
    )
}
