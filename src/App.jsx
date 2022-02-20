import React from 'react';
import { ThemeProvider } from 'styled-components';
import ArticlePreview from './components/ArticlePreview';

import Footer from './components/Footer';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <ArticlePreview />
    </main>
    <Footer />
  </ThemeProvider>
);

export default App;
