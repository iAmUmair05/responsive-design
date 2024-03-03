import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

  
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path="/services" element={<Services />}></Route>

        <Route exact path = "/about" element={<About />}></Route>

        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>

      </Router>
  
    </div>
  );
}

export default App;
