import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mt-5 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Skill" element={<Skill />} />
        <Route path="Project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
