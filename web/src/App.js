import React from 'react';
import Header from './components/Header';
import Route from './routes';

import { ContextProvider } from './Hooks/AuthContext';

function App() {

  return (
    <ContextProvider>
      <Header />
      <Route />
    </ContextProvider>
  );
}

export default App;
