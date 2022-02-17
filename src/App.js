import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./views/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/my-app/" element={<Home />} />
        <Route path="/my-app/project" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
