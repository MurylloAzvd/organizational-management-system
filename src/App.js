import './App.css';
import 'antd/dist/antd.css';
import { ReactComponent as Icon } from './assets/building.svg'
import Sectors from './components/Sectors';
import AddSector from './components/AddSector';

function App() {
  const sectorsList = [
    {
      name: 'SETOR 1',
      id: 1,
      positions: [
        'CARGO 1',
        'CARGO 2',
        'CARGO 3',
        'CARGO 4',
        'CARGO 5',
      ]
    },
    {
      name: 'SETOR 2',
      id: 2,
      positions: [
        'CARGO 1',
        'CARGO 2',
        'CARGO 3',
        'CARGO 4',
        'CARGO 5',
        'CARGO 6',
        'CARGO 7',
      ]
    },
    {
      name: 'SETOR 3',
      id: 3,
      positions: [
        'CARGO 1',
        'CARGO 2',
        'CARGO 3',
        'CARGO 4',
        'CARGO 5',
        'CARGO 6',
        'CARGO 7',
        'CARGO 8',
        'CARGO 9',
      ]
    },
    {
      name: 'SETOR 4',
      id: 4,
      positions: [
        'CARGO 1',
        'CARGO 2',
        'CARGO 3',
      ]
    }
  ]

  return (
    <div className="container">
      <div className="logo">
        <Icon className="logo__icon" />
        <span>SETORES</span>
      </div>
      <main>
        <Sectors sectorsList={sectorsList} />
        <AddSector />
      </main>
    </div>
  );
}

export default App;
