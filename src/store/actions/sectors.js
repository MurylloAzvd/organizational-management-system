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

const editSector = (sector) => {
    return {
        type: 'EDIT_SECTOR',
        payload: sector
    }
}

const removeSector = (id) => {
    return {
        type: 'REMOVE_SECTOR',
        payload: id
    }
}

const sectors = {
    addSector,
    editSector,
    addSectors,
    addEdit,
    removeSector
}

export default sectors