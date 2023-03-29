import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Pages/MainRoutes/MainRoutes";
import Dresses from "./Pages/Dresses/Dresses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Dresses /> 
      <Footer />
    </div>
  );
}

export default App;
