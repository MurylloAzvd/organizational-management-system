import './style.css'
import { CloseCircleFilled } from '@ant-design/icons'
import { useState } from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';


function AddSector() {
    const [newSector, setNewSector] = useState({ name: '', positions: [] })
    const [tagInput, setTagInput] = useState('')

    const dispatch = useDispatch()

    return (
        <div className="addSector">
            <h1>ADICIONAR SETOR</h1>

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
                api
                    .post('/sectors', newSector)
                    .then((response) => {
                        setNewSector({ name: '', positions: [] });
                        setTagInput('');
                        dispatch({ type: 'ADD_SECTOR', payload: newSector })
                    });
            }}>
                SALVAR
            </button>
        </div>
    )
}

export default AddSector;