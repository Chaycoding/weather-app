import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import MainPage from "./main";
import ScrollToTop from "../scrollToTop";
import { useState } from "react";

function Allpages() {
  const [city, setCity] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <Header setCity={setCity} />
      <Routes>
        <Route path="/" element={<MainPage city={city} />} />
      </Routes>
    </HashRouter>
  );
}

export default Allpages;
