import { Routes, Route, BrowserRouter } from "react-router-dom";

import SubmitPage from "./Submit/Submit";
import DetailPage from "./Detail/Detail";
import MainPage from "./Main/Main";
import { Reset } from "styled-reset";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Reset />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
