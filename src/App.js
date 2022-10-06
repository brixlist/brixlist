import React from "react";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/logs" element={<Logs />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
