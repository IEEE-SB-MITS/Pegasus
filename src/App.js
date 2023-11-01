import "./App.css";
import Homepage from "./homepage/Homepage";
import "./index.css";
import Navbar from "./common/Navbar";
import styles from "./constants/style";
import Hack from "./pages/hack";
import HackNav from "./common/HackNav";
import Expo from "./pages/expo/expo";

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    // <div className="App h-[95vh] md:h-screen lg:h-screen">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Homepage />
    //     </div>
    //   </div>
    // </div>
    <>
       <div className="App ">
      <Routes>
      <Route path="/" element={<Hack />} />
        <Route path="/expo" element={<Expo />} />
      
      </Routes>
    </div>
    <HackNav/>
  
    </>
  );
}

export default App;
