import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
