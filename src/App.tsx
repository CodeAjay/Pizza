// App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import "./index.css";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Admin/Dashboard";

// const Home = () => (
//   <div className="h-screen w-screen text-5xl text-black-600 font-bold top-0 z-10 py-[80px] hero">
//     <div className="container">Home Page</div>
//   </div>
// );
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
            <Route path="/contact" Component={Contact} />
            {/* <Route path="/dashboard" Component={Dashboard} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
