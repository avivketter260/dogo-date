import React, { useState } from 'react'
import logoDogo from '../pics/logoDogo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendEmailToStore } from '../action/index'
const EmailValidtion = () => {


    const [isValid, setValidetion] = useState()
    const [input, setinput] = useState('')
    const [next, setNext] = useState(false)
    const [emailExists, setEmailExists] = useState(false)
    const [move, setmove] = useState(false)
    const dispatch = useDispatch()


    const handelChange = (e) => {

        const isInputValid = e.target.value
        setinput(isInputValid)
        const arr = isInputValid.split('')
        if (isInputValid === '') {
            setValidetion(<p style={{ color: 'red', fontSize: '12px', fontWeight: '700' }}>Email is required </p>)
            setNext(false)

        } else if (arr.find(letter => letter === '@')) {
            setValidetion(<p style={{ color: 'green', fontSize: '12px', fontWeight: '700' }}> Ok  now email is valid </p>)
            setNext(true)

        } else {
            setValidetion(<p style={{ color: 'red', fontSize: '12px', fontWeight: '700' }}>Email is not valid </p>)
            setNext(false)

        }



    }

    const emailVaid = async (email) => {
        const data = await fetch('http://localhost:3001/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email })



        })
        const result = await data.json()
        setEmailExists(result)
        if (!emailExists) return setmove(true)
        console.log(result);




        // const res= await data.json()
    }

    const handelSubmit = async (e) => {
        console.log(input);
        await emailVaid(input)
        // if (emailExists) return e.preventDefault()
        // console.log(inputVal);
        dispatch(sendEmailToStore(input))


    }
    const temp2=   <div>{
        next ?
            <  Link to={move? '/password':'/signup'}>
                <button type='submit' onClick={handelSubmit} className="register-bottom-onboard">Next</button>
            </Link>
            : <button type='submit'onClick={handelSubmit} style={{ pointerEvents: 'none' }, { opacity: '0.5' }} className="register-bottom-onboard">Next</button>}
    </div>
    const temp = <p>Email allredy exsits in our system please  <Link to='/sign-in'> sign in</Link></p>
    console.log(emailExists);
    return (

        <div  >
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className='box'>
                <div className="box-title">
                    <Link style={{ color: 'black' }} to="/" >
                        <i class="fas fa-angle-left"></i>
                    </Link>
                    <h4>About you</h4>

                </div>
                <h1>Welcome! Who are you?</h1>

                <form className="registe-form" >
                    <label style={{ textAlign: 'left' }} >Email</label><br />
                    <input type="email" name="email" className='email' placeholder='your.email@example.com' onChange={handelChange} />
                    <br />
                    {isValid ? isValid : null}

                 
                </form>
                    {emailExists ? temp : temp2}

            </div>
        </div>
    )
}

export default EmailValidtion