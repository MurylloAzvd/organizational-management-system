import './style.css'
import { CloseCircleFilled } from '@ant-design/icons'

function AddSector() {
    return (
        <div className="addSector">
            <h1>ADICIONAR SETOR</h1>

            <h2>NOME:</h2>
            <div className="inputContainer">
                <input type="text" />
            </div>

            <h2>CARGO(S):</h2>
            <div className="inputContainer">
                <input type="text" />
                <button>ADICIONAR</button>
            </div>

            <div className="tags">
                <div className="tagContainer">
                    <span className="tagTitle">CARGO 1</span>
                    <CloseCircleFilled className="tagIcon" />
                </div>
                <div className="tagContainer">
                    <span className="tagTitle">CARGO 24747478585858</span>
                    <CloseCircleFilled className="tagIcon" />
                </div>
            </div>

            <button className="saveButton">SALVAR</button>
        </div>
    )
}

export default AddSector;