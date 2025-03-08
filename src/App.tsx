import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from "./routes";

function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;
