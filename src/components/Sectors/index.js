import { Collapse } from "antd";
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './style.css'

const { Panel } = Collapse;

const text = 'rapazzzzz'

function Sectors() {
    return (
        <div className="sectors">
            <h1>SETORES</h1>
            <Collapse
                defaultActiveKey={['1']}
                onChange={(ev) => console.log()}
                expandIcon={({ isActive }) => <Arrow id={isActive ? 'active' : ''} />}
                expandIconPosition='right'
                ghost
            >
                <Panel header="SETOR 1" key="1" className="panel">
                    <p>{text}</p>
                </Panel>
                <Panel header="SETOR 2" key="2" className="panel">
                    <p>{text}</p>
                </Panel>
                <Panel header="SETOR 3" key="3" className="panel">
                    <div className="positions">
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                        <div className="position">CARGO X</div>
                    </div>
                    <div className="options">
                        <div className="position">EDITAR</div>
                        <div className="position">EXCLUIR</div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Sectors;