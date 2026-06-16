import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/homepage/Home';
import About from './pages/homepage/About';
import Projects from './pages/homepage/Projects';
import Contact from '../src/pages/homepage/Contact'
import Footer from './pages/homepage/Footer';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer />

    
    </div>

  );
}

export default App;
