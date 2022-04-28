import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Photos from "./Components/Photos";

export default (
  <Routes>
    <Route exact path="/about" element={<About />} />
    <Route exact path="/photos" element={<Photos />} />
  </Routes>
);
