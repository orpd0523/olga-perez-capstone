import LandingPage from "./pages/LandingPage/LandingPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/no" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
