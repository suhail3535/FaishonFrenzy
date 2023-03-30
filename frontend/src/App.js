import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Pages/MainRoutes/MainRoutes";
import Dresses from "./Pages/Dresses/Dresses";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import CartPage from "./Pages/CartPage/CartPage";

import AuthPage from "./Pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <AuthPage />

      <Footer />
    </div>
  );
}

export default App;
