import Home from "./Home";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <Routes>
       <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
    </Routes>
  );
}

export default Main;
