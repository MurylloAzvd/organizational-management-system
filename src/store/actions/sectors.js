import api from '../../services/api'
import { EDIT, ADD_SECTOR, GET_SECTORS, EDIT_SECTOR, REMOVE_SECTOR } from '../types'

const editSector = (sector, id) => async (dispatch) => {
    const response = await api.put(`/sectors/${id}`, sector)
    dispatch({
        type: EDIT_SECTOR,
        payload: response.data
    })
}

const addSector = (newSector) => async (dispatch) => {
    const response = await api.post(`/sectors`, newSector)
    dispatch({
        type: ADD_SECTOR,
        payload: response.data
    })
}

const getSectors = () => async (dispatch) => {
    const response = await api.get('/sectors')
    dispatch({
        type: GET_SECTORS,
        payload: response.data
    })
}

const removeSector = (id) => async (dispatch) => {
    await api.delete(`/sectors/${id}`)
    dispatch({
        type: REMOVE_SECTOR,
        payload: id
    })
}

const edit = (sector) => {
    return {
        type: EDIT,
        payload: sector
    }
}


const sectors = {
    addSector,
    editSector,
    getSectors,
    edit,
    removeSector
}

export default sectors