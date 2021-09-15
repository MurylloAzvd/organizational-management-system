import './App.css';
import 'antd/dist/antd.css';
import { ReactComponent as Icon } from './assets/building.svg'
import Sectors from './components/Sectors';
import AddSector from './components/AddSector';

function App() {

  return (
    <div className="container">
      <div className="logo">
        <Icon className="logo__icon" />
        <span>SETORES</span>
      </div>
      <main>
        <Sectors />
        <AddSector />
      </main>
    </div>
  );
}

export default App;
