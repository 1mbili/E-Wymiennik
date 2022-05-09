import React from 'react'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoggingGrid from './components/LoggingGrid'

const App = () => {
  return (
    <LoggingGrid/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(<App />);