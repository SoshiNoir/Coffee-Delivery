import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './Routes';

import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './context/CartContext';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
