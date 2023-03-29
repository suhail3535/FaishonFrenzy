import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Pages/MainRoutes/MainRoutes";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <SingleProduct/> */}
      {/* <CartPage/> */}
      <Footer />
    </div>
  );
}

export default App;
