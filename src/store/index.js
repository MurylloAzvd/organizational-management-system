import { createStore } from "redux";

const INITIAL_STATE = []

function sectors(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_SECTOR':
            return [...state, action.payload]
        case 'ADD_SECTORS':
            return [...state, ...action.payload]
        default:
            return state;
    }
}

const store = createStore(sectors);

export default store;