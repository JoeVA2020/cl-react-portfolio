import Navbar from './components/header/navbar';
import About from './components/about/about';
import Skills from './components/Skills/skills';
import Form from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Form/>
    </div>
  );
}

export default App;
