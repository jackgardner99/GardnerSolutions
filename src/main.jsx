import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages already contain the HTML, so hydrate; dev and 404.html start empty.
// (Check for an element: dev's index.html holds only the <!--app-html--> comment.)
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
