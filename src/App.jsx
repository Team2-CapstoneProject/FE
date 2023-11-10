import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LayoutDashboard from "./Pages/Dashboard/LayoutDashboard";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      {/* <Router> */}
      <MainContent />
      {/* <LayoutDashboard /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
