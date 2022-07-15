import React from "react";
import "./PageCss/Home.css";
// import "./PageCss/subscription.css";   
import UpperTitle from "./homepage/UpperTitle";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CollegeData from "./Data.json";
import Bot from "./components/Edu-DronBot/Bot";
function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="Home">
        <UpperTitle />
      </div>
      <div className="Searchalign">
        
        
      <SearchBar placeholder="Search a College Name" data={CollegeData}/>
      </div>
      
      <div className="abhi">
        <Subscription />
      </div> 
      <Bot/>
      


    </>
  );
}

export default Home;
