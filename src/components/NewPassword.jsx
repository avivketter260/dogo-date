import React, { useState } from 'react'
import logoDogo from '../pics/logoDogo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendPasswordToStore } from '../action/index'


const NewPassword = () => {

    const dispatch = useDispatch()

    const [isPasswordValid, setPassword] = useState('')
    const [sendToStore, setSendToStore] = useState(false)

    const handelSubmit = () => {
        // e.preventDefault() 
        console.log(isPasswordValid);
            return dispatch(sendPasswordToStore(isPasswordValid))
    }


    const handelChange = (e) => {
        const passVal = e.target.value
        if(passVal !== ''){
            setSendToStore(true)
            setPassword(passVal)
        }else{
            setSendToStore(false)
        }
        
    }
    return (

        <div  >
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className='box'>
                <div className="box-title">
                    <Link style={{ color: 'black' }} to="/signup" >
                        <i class="fas fa-angle-left"></i>
                    </Link>
                    <h4>password</h4>

                </div>
                <h1 className='h1-title'>What is Your Password?</h1>

                <form className="registe-form" >
                    <label style={{ textAlign: 'left' }} >Password</label><br />
                    <input type="password" name="password" onChange={handelChange} />
                    <br />
                    {sendToStore? <Link to='/onboard' >
                        <button onClick={handelSubmit} className="register-bottom-onboard">Next</button>
                    </Link>:<button style={{pointerEvents:'none'},{opacity:'0.5'}} className="register-bottom-onboard">Next</button> }

                </form>

            </div>
        </div>
    )
}

export default NewPassword