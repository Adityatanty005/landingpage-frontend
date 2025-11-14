import { BrowserRouter, Routes, Route } from "react-router-dom";
import University1 from "./pages/University1.jsx";
import University2 from "./pages/temp2.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lpu" element={<University1 />} />
        <Route path="/giet" element={<University2 />} />
      </Routes>
    </BrowserRouter>
  );
}
