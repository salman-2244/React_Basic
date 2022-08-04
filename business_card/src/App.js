
import './App.css';
import About from './components/About'
import Photo from './components/Photo'
import Name from './components/Name'
import Buttons from './components/Buttons'
import Footer from './components/Footer'


function App() {
  return (
   <div className="mainPage">
    <Photo/>
    <Name/>
    <Buttons/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
