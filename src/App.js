import { Routes, Route, BrowserRouter } from "react-router-dom";

import SubmitPage from "./Submit/Submit";
import DetailPage from "./Detail/Detail";
import MainPage from "./Main/Main";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        //{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
