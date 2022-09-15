import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
