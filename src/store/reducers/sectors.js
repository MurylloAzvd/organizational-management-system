const sectors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SECTOR':
            return [...state, action.payload]
        case 'ADD_SECTORS':
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default sectors;