import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./page/Menupage/Menu";
import Home from "./page/Homepage/Home";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
