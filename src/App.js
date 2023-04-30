import MainPage from "./\bMain/Main";
import "./App.css";
import SubmitPage from "./Submit/Submit";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailPage from "./Detail/Detail";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
