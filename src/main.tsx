import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StartProject from "./pages/StartProject";
import Blog from "./pages/Blog";

// Service pages
import AIPage from "./pages/services/AI";
import CloudPage from "./pages/services/Cloud";
import CyberPage from "./pages/services/Cybersecurity";
import WebDevPage from "./pages/services/WebDev";
import DataPage from "./pages/services/Data";
import MobilePage from "./pages/services/Mobile";
import ApexERPPage from "./pages/services/ApexERP";

// Legal / Trust pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";

import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },

      // service detail pages
      { path: "services/ai", element: <AIPage /> },
      { path: "services/cloud", element: <CloudPage /> },
      { path: "services/cybersecurity", element: <CyberPage /> },
      { path: "services/web-development", element: <WebDevPage /> },
      { path: "services/data-engineering", element: <DataPage /> },
      { path: "services/mobile-apps", element: <MobilePage /> },
      { path: "services/apex-erp", element: <ApexERPPage /> },

      // main pages
      { path: "start-project", element: <StartProject /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },

      // legal / trust
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "security", element: <Security /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
