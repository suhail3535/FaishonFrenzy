import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import MainRoutes from "./Pages/MainRoutes/MainRoutes";
import Mangage from "./Pages/Admin/Manage";
import BackToTop from "./Pages/HomePage/BacktoTop";

function App() {
  return (
    <div className="App">
      <Navbar />

   
      <MainRoutes />

<BackToTop/>


      
      <Footer />

    </div>
  );
}

export default App;
