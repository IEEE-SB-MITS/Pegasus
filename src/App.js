import "./App.css";
import "./index.css";

import HackNav from "./common/HackNav";
import Expo from "./pages/expo/expo";

import { Routes, Route } from "react-router-dom";

import Preloader from "./constants/preloader";

// function App() {

//   return (
//     <>
   
//       <Preloader />
//       <div className="App ">
//         <Routes>
//           <Route path="/" element={<Expo />} />
//         </Routes>
//       </div>
//       <HackNav />
//     </>
//   );
// }

function App() {
  return (
    <div className="w-screen h-screen text-center flex items-center justify-center bg-black text-white text-7xl font-bold uppercase font-mono">
      coming soon
    </div>
  );
}

export default App;
