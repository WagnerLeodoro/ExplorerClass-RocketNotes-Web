import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import theme from './assets/styles/theme'
import { AuthProvider } from './store/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
