import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import ListaFragment from './components/Fragment';


function App() {
   const Nome = 'jonathan';

  return (
    <div className="App">  {/*Class no react é className="" */}
     
     <Pessoa profissao="Dev"
           idade='21'
            nome='Jonathan'
             foto='https://via.placeholder.com/150'  />

          <ListaFragment/>
                  
          <SayMyName nome={Nome} idade="21"/>
          
    </div>
    
  );
}

export default App;
