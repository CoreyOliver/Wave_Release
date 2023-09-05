//react and dom init
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components & pages
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
// import WaveTable from './components/WaveTable.jsx';
import WholesaleWaveTable from './components/WholesaleWaveTable.jsx';

//styling
import './index.css'

//actions & loaders

// import {loader as getWaves} from './components/WaveTable.jsx';
import {loader as getWholesaleWaves } from './components/WholesaleWaveTable.jsx'
import {action as addWholesaleWave} from './function/addWholesaleWave.action.js'

//router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      loader: getWholesaleWaves,
      element: <WholesaleWaveTable />,
      action: addWholesaleWave,
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
