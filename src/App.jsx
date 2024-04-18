import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feactures from "./components/Feactures";
import Faction from "./components/Faction";
import Manual from "./components/Manual";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feactures />
      <Faction />
      <Manual />
    </>
  );
}

export default App;
