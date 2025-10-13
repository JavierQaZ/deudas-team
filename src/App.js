import './App.css';
import Deudor from './components/deudor';
import data from './data/data.json'

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>
        FOKIN PAGUEN
      </h1>

      {data.map((item, index) => (
        <Deudor key={index} {...item}/>
      ))}
    </div>
  );
}

export default App;
