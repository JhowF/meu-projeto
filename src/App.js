import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NewComponent from './components/NewComponent';
import SayMyName from './components/SayMyName';


function App() {
   const Nome = 'jonathan';

  return (
    <div className="App">  {/*Class no react é className="" */}
     
          <HelloWorld/>
          <SayMyName nome={Nome} idade="21"/>
          <SayMyName nome="Paloma" idade="18"/>
          
            
          
    </div>
  );
}

export default App;
