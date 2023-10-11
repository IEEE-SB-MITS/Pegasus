import './App.css';
import './index.css'
import Marquee from "react-fast-marquee";


function App() {
  return (
    <div className="App">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        {/* <img src="https://i.imgur.com/4zxR5xb.png" alt="" /> */}
        <Marquee>
          Coming Soon in few hours....Revealing in sometime
        </Marquee>
    </div>
  );
}

export default App;
