import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Acceuil from "./pages/Acceuil";
import { StateProvider } from "./utils/context/injex";
import "./styles/index1.css";
import Form from "./components/Client/Form";
import Politic from "./pages/Politic";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Acceuil />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/biorésonance" element={<Form bio />} />
            <Route path="/communication-animale" element={<Form com />} />
            <Route path="/recherche-animale" element={<Form rec />} />
            <Route path="/lecture-oracle" element={<Form ora />} />
            <Route path="/politique-de-confidentialité" element={<Politic />} />
          </Routes>
        </React.Fragment>
      </StateProvider>
    </Router>
  </React.StrictMode>
);
