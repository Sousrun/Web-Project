// import LoginSignup from "./components/LoginSignup";
// import index from "../src/components/index";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Laptops from "./components/Category/Laptops";
import GamingPC from "./components/Category/GamingPC";
import Accessories from "./components/Category/Accessories";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {
        <><Navbar /><div>
          <Routes>
            <Route path="/GamingPC" element= {<GamingPC />} />
            <Route path="/Laptops" element= {<Laptops />} />
            <Route path="/Accessories" element= {<Accessories />} />
          </Routes>
        </div></> }
    </>
  );
}
export default App;


