import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./PageCss/App.css";
import "./PageCss/navbar.css";
import "./PageCss/Home.css";
import "./PageCss/footer.css";
import Navbar from "./components/Navbar";
import Login from "./loginpage/Login";
import Signup from "./loginpage/Signup";
import DemoCreater from "./components/DemoCreater";
import Home from "./Home";
// import AboutUs from './components/AboutUs'; // <------ {CSS issues}

function App() {
  return (
    < >
      <Navbar />
      <DemoCreater />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Signup />} />
        <Route path="/creater" element={<DemoCreater />} />
        {/* <Route path="/about" element={<AboutUs/>} /> */}
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found etc</h2>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
