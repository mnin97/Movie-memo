import { Routes, Route, HashRouter } from "react-router-dom";

import SubmitPage from "./Submit/Submit";
import DetailPage from "./Detail/Detail";

import { Reset } from "styled-reset";
import MainPage from "./\bMain/Main";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Reset />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
