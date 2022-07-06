import './PageCss/App.css';
import './PageCss/navbar.css';
import './PageCss/Home.css';
import './PageCss/footer.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from './loginpage/Login';
import Signup from './loginpage/Signup';
import Title from './Title'


function App() {
  return(
    
    
     <>
     {/* <BrowserRouter> */}
    {/* <Routes> */}
      <Navbar/>
      
      <Home/>
      <Signup/>
      <Login/>
      {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/aboutus" element={<AboutUs/>}> */}
        {/* </Route> */}
      {/* </Route> */}
      <Footer/>
    {/* </Routes> */}
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;
