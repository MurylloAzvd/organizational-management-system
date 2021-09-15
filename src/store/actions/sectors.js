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

const sectors = {
    addSector,
    addSectors
}

export default sectors