import React, { useState } from 'react'
import logoDogo from '../../pics/logoDogo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userProfileDetailes } from '../../action/index'
const UserName = () => {
    const dispatch = useDispatch()
    const [isInputValid, setInput] = useState(null)
    const [nextToGender, setNext] = useState(false)
    const [nextToAge, setNextAge] = useState(false)
    const [nextToDate, setNextDate] = useState(false)
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState(null)
    const [userDate, setDate] = useState('0')
    const [levels, setLevels] = useState('level-one')

    const handelChange = (e) => {
        const inputVal = e.target.value
        if (inputVal === '') {

            setInput(<p className='animation-p' style={{ color: 'red', opacity: '0', marginTop: '-1rem', fontSize: '12px', fontWeight: '700' }}>Your name can’t be blank! </p>)

        } else if (inputVal.length === 1) {
            setInput(<p className='animation-p2' style={{ color: 'red', opacity: '0', marginTop: '-1rem', fontSize: '12px', fontWeight: '700' }}>Sorry, that name is too short. </p>)
        } else {
            setInput(<p className='animation-p3' style={{ opacity: '0',  marginTop: '-1rem', fontSize: '12px', fontWeight: '700' }}>{inputVal}. Sounds like a good Doggy! </p>)
        }

    }

    const handelClick = () => {
        setNext(true)
        if (levels === 'level-one') {
            let name = document.querySelector('.userInput').value
            console.log(name);
            setUsername(name)
            setLevels('level-two')
            setTimeout(() => {
                document.querySelector('.user-input').remove()
                return document.querySelector('.profile-gender').style.display = 'inline-block'
            }, 2000);
        }
        if (levels === 'level-two') {
            let radioVal = document.querySelectorAll('.gender')
            for (let i in radioVal) {
                if (radioVal[i].checked) {
                    setGender(radioVal[i].value)
                }
            }
            setLevels('level-three')
            setNextAge(true)
            setTimeout(() => {
                document.querySelector('.user-input').remove()
                return document.querySelector('.user-date').style.display = 'inline-block'
            }, 2000);
        }
        if (levels === 'level-three') {
            console.log('level 3');
        }
    }

    const handelDateChange = () => {
        let userDateVal = document.querySelector('.date').value
        setDate(userDateVal)
        setNextDate(true)
    }
    const sendDataToStore = () => {
        const allD = {
            username,
            gender,
            userDate
        }
        dispatch(userProfileDetailes(allD))
    }
   
    return (
        <div >
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className='box'>
                <div className="box-title">
                    <h4>About you</h4>
                </div>

                <form className="registe-form" >
                    <div className={nextToGender ? 'user-input' : null} >
                        <h1 style={{padding:'0rem 0.35rem'}}>What’s your first name?</h1>
                        <input type="text" className="userInput" name="username" onChange={handelChange} placeholder='First name' />
                        <br />
                        {isInputValid ? isInputValid : null}
                    </div>

                    <div className={nextToAge ? 'user-input' : null} >

                        <div className="profile-gender" style={{ display: 'none' }}>
                            <h1 style={{ display: 'flex', justifyContent: 'center' }}>I am a...</h1>
                            <br />
                            <div className="radio-femal">
                                <label htmlFor="">Good Girl</label>
                                <input type="radio" className='gender' value="girl" name="gender" />
                            </div>
                            <div className="radio-male">
                                <label htmlFor="">Good Boy</label>
                                <input className="input-radio-male" value="boy" className='gender' name="gender" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="user-date" style={{ display: 'none' }}>
                        <h1>How young are you?</h1>
                        <input className='date' type="date" onChange={handelDateChange} />
                        {userDate ? null : <p className='animation-p' style={{ color: 'red', opacity: '0', marginLeft: '20%', fontSize: '12px', fontWeight: '700' }}>Date of birht is require </p>}

                    </div>


                </form>

                <span className='visibleToOthers'> < i style={{ marginRight: '12px' }} class="far fa-eye"></i>This info will be visible to others</span>
                <div className='place-it'>

                    {nextToDate ? <Link to='/location'  >
                        <button className="register-bottom-onboard" onClick={sendDataToStore}>NEXT</button>
                    </Link> : <button className="register-bottom-onboard" onClick={handelClick}>NEXT</button>}
                </div>
            </div>

        </div>
    )
}

export default UserName