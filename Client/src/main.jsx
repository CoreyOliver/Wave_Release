//react and dom init
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components & pages
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import WholesaleWaveTable from "./components/WholesaleWaveTable.jsx";
import WebWaveTable from "./components/WebWaveTable.jsx";
import CalendarContainer from "./components/CalendarContainer.jsx";
import UnscheduleWaveList from "./components/UnscheduleWaveList.jsx";

//styling
import "./index.css";

//actions & loaders

import { loader as getWholesaleWaves } from "./components/WholesaleWaveTable.jsx";
import { action as addWholesaleWave } from "./function/addWholesaleWave.action.js";
import { loader as getWebWaves } from "./components/WebWaveTable.jsx";
import {action as addWebWave } from "./function/addWebWave.action.js"
import {loader as getCalendarData} from "./components/CalendarContainer.jsx"
import { loader as getUnscheduledWaves} from "./components/UnscheduleWaveList.jsx"
import { action as updateUnscheduledWaves } from "./function/updateShipDate.action.js"
 
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
        action: addWebWave
      },
      {
        path: "/calendar",
        loader: getCalendarData,
        element: <CalendarContainer />,
      },
      {
        path: "/unscheduled",
        loader: getUnscheduledWaves,
        element: <UnscheduleWaveList />,
        action: updateUnscheduledWaves
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
