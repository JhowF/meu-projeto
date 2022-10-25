import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/Home';
import Empresa from './components/empresa';
import Contato from './components/Contato';
import Navbar from "./components/Navbar";
import Footer from "./Reascunho/Footer";



function App() {

  return (
    <Router>
     <Navbar/>
      <Routes> {/*Vei para substituir o Switch*/}
        <Route exact path='/' element={<Home/>}>
          

        </Route>
        <Route path='/empresa' element={<Empresa/>}>
          

        </Route>
        <Route path='/contato' element={<Contato/>}>
          

        </Route>
      </Routes>
      <Footer/>
    </Router>

    
     
   
    
  )
}

export default App
