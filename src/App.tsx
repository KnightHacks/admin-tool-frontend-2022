import React from "react";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Sponsors from "./pages/sponsors";
import Attendees from "./pages/attendees";
import Schedule from "./pages/schedule";
import Hackathon from "./pages/hackathon";
import Analytics from "./pages/analytics";
import Logistics from "./pages/logistics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/attendees" element={<Attendees />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/logistics" element={<Logistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
