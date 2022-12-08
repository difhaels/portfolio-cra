import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";

function App() {
  return (
    <div className="container mt-5 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Skill" element={<Skill />} />
        <Route path="Project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
