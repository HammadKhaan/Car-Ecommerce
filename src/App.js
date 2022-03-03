//import './App.css';
import { render } from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import "antd/dist/antd.min.css";
import "./Global.css";
import Brands from "./screens/Brands";
import About from "./screens/About";
import Contact from "./screens/Contact";
import AllCars from "./screens/AllCars";
import CarDetail from "./screens/CarDetail";
import Recommendation from "./screens/Recommendation";
import ThankYou from "./screens/ThankYou";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:brand/allcars" element={<AllCars />} />
        <Route path="/:name/carDetail" element={<CarDetail />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
