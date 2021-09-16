const addSector = (newSector) => {
    return {
        type: 'ADD_SECTOR',
        payload: newSector
    }
}

const addSectors = (sectors) => {
    return {
        type: 'ADD_SECTORS',
        payload: sectors
    }
}

const addEdit = (sector) => {
    return {
        type: 'ADD_EDIT',
        payload: sector
    }
}

const removeEdit = () => {
    return {
        type: 'REMOVE_EDIT'
    }
}

const editSector = (sector) => {
    return {
        type: 'EDIT_SECTOR',
        payload: sector
    }
}

const sectors = {
    addSector,
    editSector,
    addSectors,
    addEdit,
    removeEdit,
}

export default sectors