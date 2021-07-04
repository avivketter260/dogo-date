import React, { useEffect, useState } from 'react'
import logoDogo from '../../pics/logoDogo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userProfileDetailesLocation} from '../../action/index'

export default function Location() {
    const dispatch= useDispatch()
    const [allLocationData, setAllLocationData] = useState([])
    const [city, setCity] = useState('')
    const [next, setNext] = useState(false)
    useEffect(() => {
        const allCitiys = [
            "Alma",
            "Amir",
            "Arugot",
            "Aseret",
            "En Ayyala",
            "En HaShelosha",
            "Evron",
            "Acre",
            "Afiqim",
            "Ahituv",
            "Allonim",
            "Ashdod",
            "Ashqelon",
            "Azor",
            "Bahan",
            "Baraq",
            "Bareqet",
            "Bat Hadar",
            "Bat Hefer",
            "Bat Yam",
            "Beersheba",
            "Ben Shemen-Kefar Hano`ar",
            "Bene Ziyyon",
            "Bet Alfa",
            "Bet Dagan",
            "Bet Oren",
            "Bet Shemesh",
            "Binyamina",
            "Biriyya",
            "Dabburiya",
            "Dimona",
            "Eilat",
            "Elyakhin",
            "Elyaqim",
            "Emunim",
            "Et Taiyiba",
            "Even Yehuda",
            "Gan Hayyim",
            "Gan Yavne",
            "Ganne Tiqwa",
            "Gedera",
            "Gibbeton",
            "Gimzo",
            "Ginnosar",
            "Giv`at Hayyim",
            "Hadar `Am",
            "Hadar Ramatayim",
            "Hadera",
            "Hadid",
            "Haifa",
            "HaKarmel",
            "Haluz",
            "Hazav",
            "Hazor Ashdod",
            "Hazor HaGelilit",
            "Herut",
            "Herzliya",
            "Hever",
            "Hod HaSharon",
            "Holon",
            "Hurfeish",
            "Jaffa",
            "Jerusalem",
            "Kadima",
            "Karkur",
            "Kefar Daniyyel",
            "Kefar Netter",
            "Kefar Witqin",
            "Kefar Yona",
            "Kfar Saba",
            "Liman",
            "Lod",
            "maalot Tarshiha",
            "Magen",
            "Maghar",
            "Mazkeret Batya",
            "Mazliah",
            "Mazor",
            "Mesillat Ziyyon",
            "Migdal",
            "Mikhmoret",
            "Misgav Regional Council",
            "Mizpe Netofa",
            "Modiin",
            "Moran",
            "Naham",
            "Nahariya",
            "Nazareth",
            "Nazerat `Illit",
            "Nesher",
            "Ness Ziona",
            "Netanya",
            "Netivot",
            "Newe Efrayim",
            "Newe Yamin",
            "Nir Zevi",
            "Nirim",
            "Nordiyya",
            "Ofaqim",
            "Or `Aqiva",
            "Or Yehuda",
            "Pardes Hanna Karkur",
            "Pardesiyya",
            "Pasuta",
            "Petah Tikwah",
            "Qiryat Ata",
            "Qiryat Bialik",
            "Qiryat Gat",
            "Qiryat Hayyim",
            "Qiryat Motzkin",
            "Qiryat Ono",
            "Qiryat Tiv`on",
            "Qiryat Yam",
            "Ramat Aviv",
            "Ramat Dawid",
            "Ramat Ef`al",
            "Ramat Gan",
            "Ramat HaSharon",
            "Ramat Poleg",
            "Ramat Yishay",
            "Ramla",
            "Ramot Naftali",
            "Rehovot",
            "Rinnatya",
            "Rishon LeZion",
            "Rishpon",
            "Safed",
            "Sarid",
            "Savyon",
            "Sde Boker",
            "Sde Warburg",
            "Sderot",
            "Sedot Yam",
            "Shamir",
            "Shave Ziyyon",
            "Shefayim",
            "Shelomi",
            "Shetulim",
            "Shoval",
            "Talme Menashe",
            "Tel Aviv",
            "Tel Mond",
            "Tiberias",
            "Timrat",
            "Tirat Karmel",
            "Tirat Yehuda",
            "Urim",
            "Yaqum",
            "Yavne",
            "Yehud",
            "Zoran"
        ]
        setAllLocationData(allCitiys)
    }, [])
    const handelChange = (e) => {
        setCity(e.target.value)
        setNext(true)
    }
    const handelSubmit = (e) => {
        // e.preventDefault()
        console.log('we');
dispatch(userProfileDetailesLocation(city))
    }
    const title = {

        position: 'absolute',
        width: '100%',
        top: '25%',
        transform: 'translate(-56 %, -50 %)'
    }
    
    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <img width='190px' height='150px' src={logoDogo} alt="" />
                </div>
            </div>
            <div className="box">
                <br />
                <form  >
                    <h1 style={title} >Where do you live?</h1>
                    <select name="city" id="city" onChange={handelChange}>
                        <option key='main'>Where you live?</option>                        {
                            allLocationData.map((city, i) => {
                                return (
                                    <option key={i}>{city}</option>
                                )
                            })
                        }
                    </select>
                    <span className='visibleToOthers'> < i style={{ marginRight: '12px' }} class="far fa-eye"></i>This info will be visible to others</span>
                    {next ?
                     <Link to='/upload-img'>
                        <button  className="register-bottom-location" onClick={handelSubmit}>NEXT</button>
                    </Link> 
                    : <button style={ { pointerEvents: 'none' }, { opacity: '0.5' }} className="register-bottom-location">Next</button>}
                </form>
            </div>
        </div>
    )
}
