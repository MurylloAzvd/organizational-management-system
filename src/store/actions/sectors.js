import api from '../../services/api'
import { ADD_EDIT, ADD_SECTOR, ADD_SECTORS, EDIT_SECTOR, REMOVE_SECTOR } from '../types'

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

const addSectors = () => async (dispatch) => {
    const response = await api.get('/sectors')
    dispatch({
        type: ADD_SECTORS,
        payload: response.data
    })
}

const addEdit = (sector) => {
    return {
        type: ADD_EDIT,
        payload: sector
    }
}

const removeSector = (id) => async (dispatch) => {
    await api.delete(`/sectors/${id}`)
    dispatch({
        type: REMOVE_SECTOR,
        payload: id
    })
}

const sectors = {
    addSector,
    editSector,
    addSectors,
    addEdit,
    removeSector
}

export default sectors