import { combineReducers } from 'redux'

const user = (state = null) => state

const services = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SERVICE':
            return [...state, action.value]
        default:
            return state
    }
}

// const makes = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_MAKES':
//             return action.value
//         // return [ ...state, action.value ] 
//         // default:
//         //     return state
//         case 'DELETE_MAKE':
//             const makes = [...state]

//             makes.splice(action.value, 1)

//             return makes
//         default:
//             return state

//     }

export default combineReducers({ user, services })