import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Exp from "./pages/Exp";
import Writing from "./pages/Writing";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Exp />} />
        <Route path="writing" element={<Writing />} />
      </Routes>
    </>
  );
};

export default App;
