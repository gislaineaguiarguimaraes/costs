//importar o react-router-dom para criar rotas dinamicas para as  paginas do projeto
//O BrowserRouter é fundamental para o bom funcionamento das rotas, demos o nome para ele de Router e é com ele que definimos as nossas rotas
//Switch serve para ligar nossas rotas com as paginas
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from  './components/layout/Footer'
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App"> 
    {/*Englobar todo o projeto dentro do Router */}  
        <Router>
          <Navbar/>
          {/*Ligar as rotas com as paginas usando Route. Tudo que esta dentro de Routes sera dinamico e o que esta fora como o footer sera estatico*/}
          <Container customClass="min-height">
            <Routes>
              <Route path = "/" exact element= {<Home/>} />  
              <Route path = "/projects" element= {<Projects/>} /> 
              <Route path = "/company" element= {<Company/>} />  
              <Route path = "/contact" element= {<Contact/>} />  
              <Route path = "/newproject" element= {<NewProject/>} />  
            </Routes>
          </Container>
          <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
