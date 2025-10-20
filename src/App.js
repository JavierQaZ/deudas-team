import './App.css';
import Deudor from './components/deudor';
import data from './data/data.json'

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>
        Fokin Paguen
      </h1>

      <div className='app-content'>
        {data.map((item, index) => (
          <Deudor key={index} {...item}/>
        ))}
      </div>
      <footer className='app-footer'>
        v0.3.2
      </footer>
    </div>
  );
}

export default App;