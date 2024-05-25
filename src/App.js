import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Testimonial from './components/Testimonials';
import Footer from './components/footer';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
