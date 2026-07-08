import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;