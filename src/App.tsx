import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Builder";
import Header from "./components/Header";
import "grapesjs/dist/css/grapes.min.css"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
