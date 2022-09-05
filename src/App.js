import NavBar from "./components/Nav/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors:{
      primary:'#066a96',
      primaryDark:'#274874',
      dark:'#333',
      white:'#eee',
      light:'c5c5c5'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
      <NavBar />
      <ItemListContainer content="Catalogo de productos"/>
      </>
    </ThemeProvider>
  );
}

export default App;
