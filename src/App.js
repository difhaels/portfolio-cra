import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SKill" element={<Skill />} />
        <Route path="Project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}
