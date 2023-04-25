import MainPage from "./\bMain/Main";
import "./App.css";
import SubmitPage from "./Submit/Submit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </div>
  );
}

export default App;
