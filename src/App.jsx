import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Home from "./pages/Home";
import Cardetails from "./pages/Cardetails";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Hostlayout from "./components/Hostlayout";
import Dashboard from "./pages/Host/Dashboard";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<Cardetails />} />
            <Route path="/host" element={<Hostlayout />}>
              <Route path="/host" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
