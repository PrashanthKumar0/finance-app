import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MetamaskProvider } from './contexts/MetamaskProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MetamaskProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </MetamaskProvider>
  </React.StrictMode>,
)
