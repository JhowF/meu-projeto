import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import ListaFragment from './components/Fragment';
import Evento from './components/Evento';
import EventoParaFomr from './components/EventoParaFomr_useState';


function App() {
   const Nome = 'jonathan';

  return (
    <div className="App">  {/*Class no react é className="" */}
     
     <h1>Testando eventos</h1>
     <Evento numero={1}/>
     
     <EventoParaFomr/>
          
    </div>
    
  );
}

export default App;
