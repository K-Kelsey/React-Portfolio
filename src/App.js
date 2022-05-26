import './App.css';
import ReturnNav from './components/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <ReturnNav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
