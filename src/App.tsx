import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './Router';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './components/Wrapper';
import { Confirmed } from './pages/Confirmed';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Wrapper>
          <Router />
        </Wrapper>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
