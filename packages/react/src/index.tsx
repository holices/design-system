import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  )
}
