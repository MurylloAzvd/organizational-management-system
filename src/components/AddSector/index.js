import './style.css'
import { CloseCircleFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import actions from '../../store/actions';

function AddSector() {
    const [newSector, setNewSector] = useState({ name: '', positions: [] })
    const [tagInput, setTagInput] = useState('')

    const edit = useSelector(state => state.sectors.edit)
    const hasEdit = Object.keys(edit).length > 0

    const dispatch = useDispatch()

    useEffect(() => {
        hasEdit && setNewSector(edit)
    }, [edit, hasEdit])

    return (
        <div className="addSector">
            <h1>{hasEdit ? `EDITAR ${edit.name}` : 'ADICIONAR SETOR'}</h1>

            <h2>NOME:</h2>
            <div className="inputContainer">
                <input type="text" value={newSector.name} onChange={(e) => setNewSector({ ...newSector, name: e.target.value })} />
            </div>

            <h2>CARGO(S):</h2>
            <div className="inputContainer">
                <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} />
                <button
                    className="btn"
                    onClick={() => {
                        const newPositions = [...newSector.positions, tagInput]
                        setNewSector({ ...newSector, positions: newPositions })
                        setTagInput('')
                    }}
                >
                    ADICIONAR
                </button>
            </div>

            <div className="tags">
                {
                    newSector.positions.map((position, index) => (
                        <div className="tagContainer" key={index}>
                            <span className="tagTitle">{position}</span>
                            <CloseCircleFilled className="tagIcon" onClick={() => {
                                const newPositions = newSector.positions.filter((pos, ind) => index !== ind)
                                setNewSector({ ...newSector, positions: newPositions })
                            }} />
                        </div>
                    ))
                }
            </div>

            <button className="btn saveButton" onClick={() => {
                hasEdit ?
                    dispatch(actions.sectors.editSector(newSector, edit.id))
                    :
                    dispatch(actions.sectors.addSector(newSector))
                setNewSector({ name: '', positions: [] });
                setTagInput('');
            }}>
                SALVAR
            </button>
        </div>
    )
}

export default AddSector;