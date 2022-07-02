import './PageCss/App.css';
import './PageCss/navbar.css';
import './PageCss/Home.css';
import './PageCss/footer.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Title from './Title'
// import TextForm from './components/TextForm';


function App() {
  return(
    
    
     <>
     {/* <BrowserRouter> */}
    {/* <Routes> */}
      <Navbar/>
      <Home/>
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
