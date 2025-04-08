import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;

