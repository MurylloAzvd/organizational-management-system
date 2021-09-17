import { EDIT, ADD_SECTOR, GET_SECTORS, EDIT_SECTOR, REMOVE_SECTOR } from '../types'

const INITIAL_STATE = { list: [], edit: {} }

const sectors = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_SECTOR:
            return { ...state, list: [...state.list, action.payload] }

        case EDIT_SECTOR:
            const sector = action.payload
            const newListEdit = state.list.map((elem) => (
                elem.id === sector.id ?
                    sector
                    :
                    elem
            ))
            return { list: newListEdit, edit: {} }

        case REMOVE_SECTOR:
            const id = action.payload
            const newListRemove = state.list.filter((elem) => (
                elem.id !== id
            ))
            return { ...state, list: newListRemove }

        case GET_SECTORS:
            return { ...state, list: [...action.payload] }

        case EDIT:
            return { ...state, edit: action.payload }

        default:
            return state;
    }
}

export default sectors;