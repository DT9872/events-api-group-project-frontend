import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
                   
          <Route path="/gifs/:id" element={<Details />} />
          <Route path="/gifs/favorites" element={<Favorites />} />
                   
          <Route path="*" element={<Navigate to="/" />} />
                 
        </Routes>
             
      </Router>
    </div>
  );
}

export default App;
