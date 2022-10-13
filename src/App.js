import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/items/ItemListContainer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/GlobalStyles.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import CartContainer from "./components/cart/CartContainer.jsx";
// import CartCheckout from "./components/cart/CartCheckout.jsx";
import Signup from "./components/auth/Signup.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import UserProfile from "./components/auth/UserProfile.jsx";
import Signin from "./components/auth/Signin.jsx";
import OrderContainer from "./components/order/OrderContainer.jsx";

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

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartProvider>
            <GlobalStyle />
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/items/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/order" element={<OrderContainer />} />
            </Routes>
            <Signup />
            <Signin />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
