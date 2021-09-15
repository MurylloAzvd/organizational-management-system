import { Collapse } from "antd";
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './style.css'

const { Panel } = Collapse;

function Sectors({ sectorsList }) {
    return (
        <div className="sectors">
            <h1>SETORES</h1>
            <Collapse
                expandIcon={({ isActive }) => <Arrow id={isActive ? 'active' : ''} />}
                expandIconPosition='right'
                ghost
            >
                {
                    sectorsList.map((sector) => (
                        <Panel header={sector.name} key={sector.id} className="panel">
                            <div className="positions">
                                {
                                    sector.positions.map((position, index) => (
                                        <div className="position" key={index}>{position}</div>
                                    ))
                                }
                            </div>
                            <div className="options">
                                <div className="position">EDITAR</div>
                                <div className="position">EXCLUIR</div>
                            </div>
                        </Panel>
                    ))
                }
            </Collapse>
        </div>
    )
}

export default Sectors;