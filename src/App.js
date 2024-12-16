import "./App.css";
import "./index.css";
import './font.css';

import HackNav from "./common/HackNav";
import Expo from "./pages/expo/expo";

import { Routes, Route } from "react-router-dom";

import Preloader from "./constants/preloader";

function App() {

  return (
    <>
   
      <Preloader />
      <div className="App ">
        <Routes>
          <Route path="/" element={<Expo />} />
        </Routes>
      </div>
      <HackNav />
    </>
  );
}

export default App;
