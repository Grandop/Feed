import { GlobalStyle } from "./styles"
import { ThemeProvider } from 'styled-components';
import { theme } from "./themes/theme";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Wrapper/>
    </ThemeProvider>
  )
}

export default App
