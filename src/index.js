import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Acceuil from "./pages/Acceuil";
import StateProvider from "./utils/context/injex";
import "./styles/index1.css";
import Form from "./components/Client/Form";
import Politic from "./pages/Politic";
import Communciation from "./pages/Communication";
import Bioresonance from "./pages/Bioresonance";
import Recherche from "./pages/Recherche";
import Oracle from "./pages/Oracle";
import About from "./pages/About";
import { ParallaxProvider } from "react-scroll-parallax";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <ParallaxProvider>
          {" "}
          <React.Fragment>
            <Routes>
              <Route exact path="/" element={<Acceuil />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
              <Route path="/biorésonance" element={<Bioresonance />} />
              <Route
                path="/communication-animale"
                element={<Communciation />}
              />
              <Route path="/recherche-animale" element={<Recherche />} />
              <Route path="/lecture-oracle" element={<Oracle />} />
              <Route path="/biorésonance/rendez-vous" element={<Form bio />} />
              <Route
                path="/communication-animale/rendez-vous"
                element={<Form com />}
              />
              <Route
                path="/recherche-animale/rendez-vous"
                element={<Form rec />}
              />
              <Route
                path="/lecture-oracle/rendez-vous"
                element={<Form ora />}
              />
              <Route
                path="/politique-de-confidentialité"
                element={<Politic />}
              />
            </Routes>
          </React.Fragment>
        </ParallaxProvider>
      </StateProvider>
    </Router>
  </React.StrictMode>
);
