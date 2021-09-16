import './style.css'
import { CloseCircleFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import { useSelector } from 'react-redux';


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
                    api
                        .put(`/sectors/${edit.id}`, newSector)
                        .then((response) => {
                            setNewSector({ name: '', positions: [] });
                            setTagInput('');
                            dispatch(actions.sectors.editSector(response.data))
                        })
                    :
                    api
                        .post('/sectors', newSector)
                        .then((response) => {
                            setNewSector({ name: '', positions: [] });
                            setTagInput('');
                            dispatch(actions.sectors.addSector(response.data));
                        });
            }}>
                SALVAR
            </button>
        </div>
    )
}

export default AddSector;