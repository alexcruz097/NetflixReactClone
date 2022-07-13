import React from "react";
import Hero from "./component/hero/Hero";
import Nav from "./component/Nav"
function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <Nav />
        <Hero />
      </div>
      <hr />
    </div>
  );
}

export default App;
