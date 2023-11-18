import "./App.css";
import "./index.css";
import HackNav from "./common/HackNav";
import Expo from "./pages/expo/expo";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState here
// import Loading from "./constants/Loading";
import Preloader from "./constants/preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Declare useState inside the component

  useEffect(() => {
    window.addEventListener("load", () => {
      // Page has finished loading
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Preloader/>
        ) : (
          <>
            <div className="App ">
              <Routes>
                <Route path="/" element={<Expo />} />
              </Routes>
            </div>
            <HackNav />
          </>
        )}
      </div>
    </>
  );
}

export default App;
