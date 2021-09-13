import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { ReactComponent as Icon } from './assets/building.svg'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <Icon className="logo__icon" />
        SETORES
      </div>
      <main>
        <div className="sectors"></div>
        <div className="addSectors"></div>
      </main>
    </div>
  );
}

export default App;
