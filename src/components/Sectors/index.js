import { Collapse } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import api from '../../services/api'
import './style.css'

const { Panel } = Collapse;

function Sectors() {
    const sectorsList = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        api
            .get('/sectors')
            .then((response) => dispatch({ type: 'ADD_SECTORS', payload: response.data }))
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