import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navbartepm from "./components/Navbartemp/Navbartemp";

import MainRoutes from "./Pages/MainRoutes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbartepm />
      <MainRoutes />


    </div>
  );
}

export default App;
