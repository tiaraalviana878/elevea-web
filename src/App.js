import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home"; // ✅ pake ini
import About from "./pages/About";
import Transformation from "./pages/Transformation";
import Leadership from "./pages/Leadership";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ INI YANG BENER */}
          <Route path="/about" element={<About />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;