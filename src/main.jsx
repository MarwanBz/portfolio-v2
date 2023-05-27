import App from './App'
import Maintenance from './components/UnderBuilding/index'
import React from 'react'
import ReactDOM from 'react-dom/client'

const isUnderMaintenance = true
ReactDOM.createRoot(document.getElementById("root")).render(
    isUnderMaintenance ? <Maintenance /> : <App />
);
