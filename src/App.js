import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/items/ItemListContainer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/GlobalStyles.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer.jsx";

function App() {
  const theme = {
    colors: {
      primary: "#066a96",
      primaryDark: "#274874",
      dark: "#333",
      white: "#eee",
      light: "c5c5c5",
    },
    screenSize: {
      desktop: "1440px",
      large: "1152px",
      tablet: "768px",
      mobile: "560px",
    },
  };
  const categories = {
    placas: "TYPE_BOARD",
    sensores: "TYPE_SENSOR",
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar categories={categories} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/items/:id" element={<ItemDetailContainer />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
