import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NewComponent from './components/NewComponent';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
   const Nome = 'jonathan';

  return (
    <div className="App">  {/*Class no react é className="" */}
     
     <Pessoa profissao="Dev"
           idade='21'
            nome='Jonathan'
             foto='https://via.placeholder.com/150'  />
                  
          <SayMyName nome={Nome} idade="21"/>
          
          
          
            
          
    </div>
  );
}

export default App;
