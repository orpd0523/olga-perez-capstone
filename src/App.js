import LandingPage from "./pages/LandingPage/LandingPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        {/* <Route exact path="/" element={<HomePage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
