import { BrowserRouter, Routes, Route } from "react-router-dom";
import University1 from "./pages/University1";
import University2 from "./pages/University2";

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
