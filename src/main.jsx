import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme  from './styles/theme';
import { Routes }  from './routes'
import { AuthProvider } from './hooks/auth';
// NAMED EXPORTS (Quando não usamos chaves, então sabemos que é export default, usamos chaves quando for NAMED EXPORTS.)

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
