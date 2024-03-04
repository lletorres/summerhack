import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// paso el <div id="root"></div>  de HTML para renderezarlo (.render)
// renderiza APP
ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
  
)
// React renderiza su componente principal dentro de la etiquete DIV ID= ROOT