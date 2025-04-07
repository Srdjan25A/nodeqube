import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
  );
};

export default App;

