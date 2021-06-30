import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import logoDogo from '../../pics/logoDogo.png'
import { sendPicUrl } from '../../action/index'

export default function UploadImg() {
    const dispatch = useDispatch();
    const [userImg, setImg] = useState('')
    const handleChange = (e) => {
        document.querySelector('.image').style.display = 'block'
        document.querySelector('.cancel-btn').style.display = 'block'

        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (() => {
            const reslut = reader.result
            setImg(reslut)
        })
        reader.readAsDataURL(file)
    }

    const thisISClick = () => {
        const defaultBtn = document.querySelector('#default-btn')
        defaultBtn.click()
    }
    const removeImage = () => {
        setImg('')
        document.querySelector('.image').style.display = 'none'
        document.querySelector('.cancel-btn').style.display = 'none'

    }

   const  sendData = ()=>{
       
        dispatch(sendPicUrl(userImg))

   }
    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <h1 style={{ textAlign: 'center' }}>please  choose a profile picture</h1>
            <div className="img-uplaod-body">

                <div className="container">
                    <div className="wrapper">
                        <div className="image" hidden>
                            <img src={userImg} alt="" />
                        </div>
                        <div className="contant">
                            <div className="icon" ><i className="fas fa-cloud-upload-alt"  ></i> </div>
                            <div className="text">No image chosen yet!</div>
                            <div className="cancel-btn" onClick={removeImage}><i className="fas fa-times"></i></div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={thisISClick} className={'custom-btn'}>Choose a image</button>
                        {userImg !== '' ? <Link to="/main-page">
                            <button className="register-bottom-v2" onClick={sendData}>Next</button>
                        </Link> : null}
                    </div>
                    <input type="file" name="uploadImg" id="default-btn" onChange={handleChange} hidden />
                </div>
            
            </div>
        </div>
    )
}
