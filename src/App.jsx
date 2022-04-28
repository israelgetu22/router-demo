import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import routes from "../src/routes";

function App() {
  return (
    <div className="App App-header">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
