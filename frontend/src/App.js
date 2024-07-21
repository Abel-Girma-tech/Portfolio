import './App.css';
import Navbar from './Compo/Navbar';
import Summary from './Compo/Summary';
import Projects from './Compo/Projects';
import Skills from './Compo/Skills';
import Testimony from './Compo/Testimony';
import Contact from './Compo/Contact';
import Footer from './Compo/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Summary/>
      <Projects/>
      <Skills/>
      <Testimony/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
