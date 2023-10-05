//react and dom init
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components & pages
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
// import WaveTable from './components/WaveTable.jsx';
import WholesaleWaveTable from "./components/WholesaleWaveTable.jsx";
import WebWaveTable from "./components/WebWaveTable.jsx";

//styling
import "./index.css";

//actions & loaders

// import {loader as getWaves} from './components/WaveTable.jsx';
import { loader as getWholesaleWaves } from "./components/WholesaleWaveTable.jsx";
import { action as addWholesaleWave } from "./function/addWholesaleWave.action.js";
import { loader as getWebWaves } from "./components/WebWaveTable.jsx";

//router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ws",
        loader: getWholesaleWaves,
        element: <WholesaleWaveTable />,
        action: addWholesaleWave,
      },
      {
        path: "/webs",
        loader: getWebWaves,
        element: <WebWaveTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
