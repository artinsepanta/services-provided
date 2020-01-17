import { combineReducers } from 'redux'

const users = (state = null) => state

const userServices = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERSERVICES':
            return [...state, action.value]
        default:
            return state
    }
}

// const makes = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_NEWSER':
//             return action.value
//         // return [ ...state, action.value ] 
//         // default:
//         //     return state
//         case 'DELETE_USERSERVICES':
//             const NEWSERV = [...state]

//             makes.splice(action.value, 1)

//             return userServices
//         default:
//             return state

//     }
//}

export default combineReducers({ users, userServices })