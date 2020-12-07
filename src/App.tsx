import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
