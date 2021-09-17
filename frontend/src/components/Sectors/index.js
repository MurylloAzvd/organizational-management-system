import { Collapse } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './style.css'
import actions from '../../store/actions'

const { Panel } = Collapse;

function Sectors() {
    const sectorsList = useSelector(state => state.sectors.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.sectors.getSectors())
    }, [dispatch])

    return (
        <div className="sectors">
            <h1>SETORES</h1>
            <Collapse
                expandIcon={({ isActive }) => <Arrow id={isActive ? 'active' : ''} />}
                expandIconPosition='right'
                ghost
            >
                {
                    sectorsList.map((sector, index) => (
                        <Panel header={sector.name} key={index} className="panel">
                            <div className="positions">
                                {
                                    sector.positions.map((position, index) => (
                                        <div className="position" key={index}>{position}</div>
                                    ))
                                }
                            </div>
                            <div className="options">
                                <div className="option" onClick={() => dispatch(actions.sectors.edit(sector))}>EDITAR</div>
                                <div className="option" onClick={() => dispatch(actions.sectors.removeSector(sector.id))}>EXCLUIR</div>
                            </div>
                        </Panel>
                    ))
                }
            </Collapse>
        </div>
    )
}

export default Sectors;