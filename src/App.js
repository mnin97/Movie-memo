import MainPage from "./\bMain/Main";
import "./App.css";
import SubmitPage from "./Submit/Submit";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
