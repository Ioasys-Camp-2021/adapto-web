import React from 'react';

import { HelmetProvider } from 'react-helmet-async';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <HelmetProvider>
    <Routes />
    <GlobalStyles />
  </HelmetProvider>
);

export default App;
