import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logoDogo from '../pics/logoDogo.png'
import mainDog from '../pics/defaultProfile.jpg'


const MainPage = () => {
    const allUserData = useSelector(state => state.newUserDetailes)
    console.log(allUserData);

    const [allApiDogs, setAllApiDogs] = useState([])
    const [focusQuestions, setfocusQuestions] = useState(false)
    const [focusDiscover, setfocusDiscover] = useState(true)
    const [focusLikes, sefocusLikes] = useState(false)
    const [focusMessages, setfocusMessages] = useState(false)
    let [padding, setPadding] = useState(4)

    useEffect(() => {
        const sendDataToServer = async () => {
            await fetch('http://localhost:3001/newUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ allUserData })
            })
        }
        sendDataToServer()
    }, [])


    useEffect(async () => {
        if (!focusDiscover) return

        const data = await fetch('https://api.thedogapi.com/v1/images/search?limit=100&page=10&order=Desc')
        const response = await data.json()
        setAllApiDogs(response)

    }, [])


    const getLikeFocuse = (e) => {

        setfocusQuestions(false)
        setfocusDiscover(false)
        setfocusMessages(false)
        sefocusLikes(true)

    }
    const getQuestionsFocuse = (e) => {

        setfocusQuestions(true)
        setfocusDiscover(false)
        setfocusMessages(false)
        sefocusLikes(false)

    }
    const getDiscoverFocuse = (e) => {

        setfocusQuestions(false)
        setfocusDiscover(true)
        setfocusMessages(false)
        sefocusLikes(false)

    }
    const getMessagesFocuse = (e) => {

        setfocusQuestions(false)
        setfocusDiscover(false)
        setfocusMessages(true)
        sefocusLikes(false)

    }


    const moveRight = () => {
        if (padding === 2724 ) return setPadding(padding= 4)
        setPadding(padding += 20)
        console.log(padding);
    }
    const moveLeft = () => {
        if (padding === 4) return
        setPadding(padding -= 20)
        console.log(padding);

    }
    const heart = {
        opacity: ' 0.2',
        margin: '7px',
        marginRight: '8 %',
        cursor: 'pointer'
    }

    const like = (e) => {
        if( e.target.style.color==='red') return   e.target.style.color='lightgrey'
        
        e.target.style.opacity='1'
        e.target.style.color='red'
    }
    return (
        <div>

            <div className="navBar-main" >

                <div className="main-title"><span >DogoDate</span></div>&nbsp;&nbsp;
                <div className={focusDiscover ? 'active' : 'discover'} onClick={getDiscoverFocuse}>
                    <span>Discover</span>&nbsp;&nbsp;
                    <i class="fas fa-search"></i>
                </div>
                <div className={focusQuestions ? 'active' : 'questions'} onClick={getQuestionsFocuse}>
                    <span>Questions</span>&nbsp;&nbsp;
                    <i class="fas fa-question"></i>
                </div>
                <div className={focusLikes ? 'active' : 'likes'} onClick={getLikeFocuse}>
                    <span >Likes</span>&nbsp;&nbsp;
                    <i class="fas fa-heart"></i>
                </div>
                <div className={focusMessages ? 'active' : 'messages'} onClick={getMessagesFocuse} >
                    <span>Messages</span>&nbsp;&nbsp;
                    <i class="far fa-envelope"></i>
                </div>



                <div className="peofile-pic">
                    <img className='img-prof' width='60px' height="60px" src={mainDog} />
                    hello {allUserData.userDetailes.username}
                </div>


            </div>


            {/* -----------------------------------DISCOVER--------------------------------------------- */}
            <i class="arrow-left fa-3x fa fas fa-arrow-circle-left" onClick={moveLeft}></i>
            <i className="arrow-right fas fa-3x fa-arrow-circle-right" onClick={moveRight}></i>
            <div style={{ paddingRight: `${padding}%` }} className="dogs-profiles-container">
                {/**203% ? %:px padding right */}
                {allApiDogs.map((dog, index) => {
                    // if(!dog.breeds[0].temperament) return
                    // console.log(dog.breeds[0].bred_for);
                    for (let i in dog.breeds[0]) {

                        return (
                            <div key={index} className="dog-frame">
                                <img className="dogs-img" src={dog.url} alt="" />
                                <h4>{dog.breeds[0]['name']}</h4>
                                {/* <h5>{dog.breeds[0]['life_span']}</h5> */}
                                <h6>{dog.breeds[0]['temperament']}</h6>
                                <i style={heart} className="far fa-2x fa-heart"  onClick={like}></i>
                            </div>
                        )
                    }
                })}

            </div>
            <div className="main-footer">
                <p>
                    © Dogo Date | Aviv Ketter</p>
            </div>
            <div>

            </div>

        </div>
    )
}

export default MainPage