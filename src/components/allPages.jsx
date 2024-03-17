import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import MainPage from "./main";
import ScrollToTop from "../scrollToTop";
import { useState } from "react";

function Allpages() {
  const [city, setCity] = useState(false);
  const [headerani, setHeaderani] = useState(false);
  return (
    <HashRouter>
      <ScrollToTop />
      <Header
        setCity={setCity}
        setHeaderani={setHeaderani}
        headerani={headerani}
      />
      <Routes>
        <Route
          path="/"
          element={<MainPage city={city} headerani={headerani} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default Allpages;
