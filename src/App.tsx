import React from 'react';

import { HelmetProvider } from 'react-helmet-async';

import { AppProvider } from './contexts';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <HelmetProvider>
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  </HelmetProvider>
);

export default App;
