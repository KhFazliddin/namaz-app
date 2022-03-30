import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ObHavo from "./pages/ObHavo";
import Tasbeh from "./pages/Tasbeh";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ob-havo" element={<ObHavo/>}></Route>
          <Route path="/tasbeh" element={<Tasbeh/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
