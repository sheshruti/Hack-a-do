import logo from './logo.svg';
import './App.css';
import Navbar from './modules/Navbar.js'
import Blog from './modules/Form.js'
import About from './modules/About.js'
import Footer from './modules/Footer.js'
function App() {
  return (
    <div>
      <Navbar/>
      <Blog/>
      <About/>
      <Footer/>
      <div className="bg-[#43bfc7] h-[auto] w-[screen] padding-[10px]">hello</div>
    </div>
  );
}

export default App;
