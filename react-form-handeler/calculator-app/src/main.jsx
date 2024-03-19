import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './components/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
