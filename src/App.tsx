import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Callendar from "./Routes/Callendar";
import ToDos from "./Routes/ToDos";
import Welcome from "./Routes/Welcome";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/todo" element={<ToDos />} />
        <Route path="/callendar" element={<Callendar />} />
      </Routes>
    </Router>
  );
}

export default App;
