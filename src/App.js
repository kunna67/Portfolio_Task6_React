import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Internship from './Internships/Internship';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Internship/>
      <Footer/>
    </div>
  );
}

export default App;
