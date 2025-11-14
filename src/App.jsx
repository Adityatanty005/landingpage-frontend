import { BrowserRouter, Routes, Route } from "react-router-dom";
import University1 from "./pages/University1.jsx";
import University2 from "./pages/University2.jsx";
import Home from "./pages/Home.jsx";

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
