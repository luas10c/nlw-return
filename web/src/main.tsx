import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

import App from './App'

const container = document.getElementById('root')
if (!container) {
  throw Error('There must be an element with root id on the page.')
}

const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)