import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './app'
import reportWebVitals from './app/reportWebVitals'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

void reportWebVitals(console.log)
