import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsDisplay from "./Components/StatsDisplay";
import Fitsnap from "./Components/Fitsnap";
import TextAlbum from "./Components/Album";
import Textcomp from "./Components/Textcomp";
import Elipses from "./Components/Elipses";
import ContactForm from "./Components/Contactform";
import Testimonal from "./Components/Testimonal";
import Footer from "./Components/Footer";
import RevolutionizeYou from "./Components/RevolutionizeYou";
import Things from "./Components/Things";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <StatsDisplay />
              <Fitsnap />
              <TextAlbum />
              <Textcomp />
              <Elipses />
              <Testimonal />
              <Things />
              <RevolutionizeYou />
              <ContactForm />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
