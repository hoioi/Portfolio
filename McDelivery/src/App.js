import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./page/Menupage/Menu";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
