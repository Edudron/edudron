import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./PageCss/App.css";
import "./PageCss/navbar.css";
import "./PageCss/Home.css";
import "./PageCss/footer.css";
import "./PageCss/subscription.css";
import Navbar from "./components/Navbar";
// import ContactUs from "./components/ContactUs";
import Home from "./Home";
// import Signupppp from "./security/Signupppp";
// import AboutUs from './components/AboutUs'; // <------ {CSS issues}

function App() {
  return (
    <>
      <Navbar />
       
       
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found etc.. </h2>
            </div>
          }
        />
      </Routes>
       
    </>
  );
}

export default App;
