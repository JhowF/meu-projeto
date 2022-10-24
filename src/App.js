import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import ListaFragment from './components/Fragment';
import Evento from './components/Evento';
import EventoParaFomr from './components/EventoParaFomr_useState';
import IfRenderizazao from './components/ifRenderizazao';
import Lista from './components/Lista';

function App() {

const meusItens = ['React', 'Vue', 'Angular']


  return (
    <div className="App">  {/*Class no react é className="" */}
     
     <h1>Renderização de listas</h1>
     <Lista itens={meusItens}/>
     <Lista itens={[]}/>
     
   
    </div>
    
  );
}

export default App;
