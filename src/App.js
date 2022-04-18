import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ModelsOfRJ from "./routes/ModelsOfRJ";
import BiCoPage from "./routes/BiCoPage";
import NotFoundPage from "./routes/NotFoundPage";
import ScrollTop from "./components/ScrollTop";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ResourcesPage from "./routes/ResourcesPage";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="modelsofrj" element={<ModelsOfRJ />} />
        <Route path="bico" element={<BiCoPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
