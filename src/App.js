import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NewComponent from './components/NewComponent';
import Frase from './components/Frase';


function App() {
  const name = 'jonathan';

  return (
    <div className="App">  {/*Class no react é className="" */}
     
        <h1> Olá React! </h1>
        <h2>Olá {name}</h2>
        <p>Soma: {2+2}</p>
        <p>Meu primeiro App</p>
          <img src="" alt=""/>  {/*No react uma tag deve ser sempre fechada msm sendo uma img que é uma self close*/}
          <HelloWorld/>
            <NewComponent/>
            <Frase/>

          
    </div>
  );
}

export default App;
