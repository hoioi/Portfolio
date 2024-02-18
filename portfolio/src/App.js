import styled from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Mac from "./Mac";

const AppWrap = styled.div``;
function App() {
  return (
    <div className="App">
      <AppWrap>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Mac" element={<Mac />}></Route>
        </Routes>
      </AppWrap>
    </div>
  );
}

export default App;
