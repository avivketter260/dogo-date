import { NEW_EMAIL, NEW_PASSWORD, NEW_USER, NEW_LOCATION, NEW_URL} from '../action/command'


const initialState = {
    email: '',
    password: '',
    userDetailes: [],
    userLocation:'',
    url:''
}

export const newUserDetailes = (state = initialState, action) => {
    switch (action.type) {
        case NEW_EMAIL:
            console.log(action.payload);
            return { ...state, email: action.payload }
        case NEW_PASSWORD:
            console.log(action.payload);
            return { ...state, password: action.payload }
        case NEW_USER:
            console.log(action.payload);
            return { ...state, userDetailes: action.payload }
        case NEW_LOCATION:
            console.log(action.payload);
            return { ...state, userLocation:action.payload }

            case NEW_URL:
                return{...state, url:action.payload}
        default: return state
    }
}