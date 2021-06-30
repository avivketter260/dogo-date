import {NEW_EMAIL,NEW_PASSWORD, NEW_USER,NEW_LOCATION,NEW_URL} from './command'
 export const sendEmailToStore= (newEmail)=>{
     console.log(newEmail);
    return{
        type: NEW_EMAIL,
        payload : newEmail
    }
}

export const sendPasswordToStore= (newpass)=>{

    return{
        type:NEW_PASSWORD,
        payload : newpass
    }
}

export const userProfileDetailes = (data)=>{
return{
    type:NEW_USER,
    payload: data
}
}

export const userProfileDetailesLocation = (data)=>{
    console.log(data);
    return{
        type:NEW_LOCATION,
        payload: data
    }
    }

    export const sendPicUrl = (url)=>{
        return{
            type:NEW_URL,
            payload: url
        }
    }