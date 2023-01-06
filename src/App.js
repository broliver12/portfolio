import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Socials from "./components/Socials";
import loadingIcon from "./images/icon/loading.svg";

function App() {
  const [loading, setLoading] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function sl() {
      console.log("sleep start");
      await sleep(2500);
      console.log("sleep end");
      setLoading(false);
    }
    sl();
  }, []);

  return loading === true ? (
    <div class="loadingContainer">
      <img class="loadingIcon" src={loadingIcon} alt="loading icon"></img>
    </div>
  ) : (
    <Router>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" exact element={
          <HomePage />
        } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </Router>
  );
}

export default App;
