import './style.css'
import { CloseCircleFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import actions from '../../store/actions';

function AddSector() {
    const [newSector, setNewSector] = useState({ name: '', positions: [] })
    const [tagInput, setTagInput] = useState('')
    const [error, setError] = useState('')

    const { edit, list } = useSelector(state => state.sectors)
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
                <input type="text" value={newSector.name} onChange={(e) => { setError(''); setNewSector({ ...newSector, name: e.target.value }) }} />
            </div>

            <h2>CARGO(S):</h2>
            <form className="inputContainer" onSubmit={(ev) => {
                ev.preventDefault()

                if (tagInput.length === 0) {
                    setError('O nome do cargo deve ser preenchido')
                    return
                }

                let repeat = 0
                list.forEach(elem => {
                    if (elem.positions.includes(tagInput)) repeat++
                })
                if (repeat > 0 || newSector.positions.includes(tagInput)) {
                    setError('Esse cargo já existe, tente outro.')
                    return
                }

                const newPositions = [...newSector.positions, tagInput]
                setNewSector({ ...newSector, positions: newPositions })
                setTagInput('')
            }}>
                <input type="text" value={tagInput} onChange={(e) => { setError(''); setTagInput(e.target.value) }} />
                <button className="btn">
                    ADICIONAR
                </button>
            </form>

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

            <p className="error">{error}</p>

            <button className="btn saveButton" onClick={() => {
                if (newSector.name.length === 0) {
                    setError('O nome do setor deve ser preenchido')
                    return
                }

                const repeat = list.filter((elem) => elem.name === newSector.name && elem.name !== edit.name).length
                if (repeat > 0) {
                    setError('Nome do setor já existe, tente outro.')
                    return
                }

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