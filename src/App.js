import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import ListaFragment from './components/Fragment';
import Evento from './components/Evento';
import EventoParaFomr from './components/EventoParaFomr_useState';
import IfRenderizazao from './components/ifRenderizazao';

function App() {

  return (
    <div className="App">  {/*Class no react é className="" */}
     
     <h1>Testando Eventos</h1>
     <Evento/>
   
    </div>
    
  );
}

export default App;
