import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import University1 from "./pages/university1.jsx";
import University2 from "./pages/university2.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lpu" element={<University1 />} />
        <Route path="/giet" element={<University2 />} />
      </Routes>
    </BrowserRouter>
  );
}
