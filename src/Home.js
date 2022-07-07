import React from "react";
import "./PageCss/Home.css";
import "./PageCss/subscription.css";
import UpperTitle from "./homepage/UpperTitle";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <UpperTitle />
      </div>

      <div className="abhi">
        <Subscription />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
