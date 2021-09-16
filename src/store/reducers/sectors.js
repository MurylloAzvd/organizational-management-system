const INITIAL_STATE = { list: [], edit: {} }

const sectors = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SECTOR':
            return { ...state, list: [...state.list, action.payload] }
        case 'ADD_SECTORS':
            return { ...state, list: [...action.payload] }
        case 'ADD_EDIT':
            return { ...state, edit: action.payload }
        case 'REMOVE_EDIT':
            return { ...state, edit: {} }
        default:
            return state;
    }
}

export default sectors;