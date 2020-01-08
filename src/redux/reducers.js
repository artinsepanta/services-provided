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

export default combineReducers({ user, services })