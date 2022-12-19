import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackTopBtn from "./components/BackTopBtn";
import Stats from "./components/Stats";
import Calender from "./components/Calender";

const App = () => {
     return (
          <div className="bg-white relative">
               <Header />
               <Hero />
               <About />
               <Skills />
               <Calender />
               <Stats />
               <Portfolio />
               <Contact />
               <BackTopBtn />
          </div>
     );
};

export default App;
