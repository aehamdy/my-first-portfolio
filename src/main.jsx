import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ProjectDetailsPage from "./components/ProjectDetailsPage";

import "./index.css";
import { LoadingProvider } from "./context/LoadingContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={null} />

            <Route path="projects/:slug" element={<ProjectDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  </StrictMode>,
);
