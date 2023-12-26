import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./page/Menupage/Menu";
import Home from "./page/Homepage/Home";
import Promotion01 from "./page/Promotionpage/Promotion01";
import Promotion02 from "./page/Promotionpage/Promotion02";
import Promotion03 from "./page/Promotionpage/Promotion03";
import Promotion04 from "./page/Promotionpage/Promotion04";
import Promotion05 from "./page/Promotionpage/Promotion05";
import Promotion06 from "./page/Promotionpage/Promotion06";
import Protection from "./page/Protectionpage/Protection";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/promotion01" element={<Promotion01 />} />
          <Route path="/promotion02" element={<Promotion02 />} />
          <Route path="/promotion03" element={<Promotion03 />} />
          <Route path="/promotion04" element={<Promotion04 />} />
          <Route path="/promotion05" element={<Promotion05 />} />
          <Route path="/promotion06" element={<Promotion06 />} />
          <Route path="/Protection" element={<Protection />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
