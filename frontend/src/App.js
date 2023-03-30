import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Pages/MainRoutes/MainRoutes";
import Dresses from "./Pages/Dresses/Dresses";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import CartPage from "./Pages/CartPage/CartPage";
<<<<<<< HEAD
import Product from "./Pages/Admin/Admin";

=======
import AuthPage from "./Pages/AuthPage/AuthPage";
>>>>>>> 98c9d7a7821677eddb89639f8315d4bf1a0320a6

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
<<<<<<< HEAD

      <Dresses />

      <SingleProduct />
      <CartPage />

=======
      <AuthPage/>
>>>>>>> 98c9d7a7821677eddb89639f8315d4bf1a0320a6
      <Footer />
    
    </div>
  );
}

export default App;
