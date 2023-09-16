import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import LifeCyclePage from "./pages/LifeCyclePage/LifeCyclePage";
import DssvPage from "./pages/DssvPage/DssvPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/life-cycle" element={<LifeCyclePage />} />
          <Route path="/dssv" element={<DssvPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
