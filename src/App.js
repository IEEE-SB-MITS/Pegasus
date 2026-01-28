import "./App.css";
import "./index.css";
import "./font.css";

import HackNav from "./common/HackNav";
import Expo from "./pages/expo/expo";

import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./common/Background";
import Preloader from "./constants/preloader";
import Timer from "./pages/expo/timer";

function App() {
  const location = useLocation();

  // Check if current route is /timer
  const isTimerPage = location.pathname === "/timer";

  return (
    <>
      {!isTimerPage && <Background />}
      {!isTimerPage && <Preloader />}

      <div className="App">
        <Routes>
          <Route path="/" element={<Expo />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>

      {!isTimerPage && <HackNav />}
    </>
  );
}

export default App;
