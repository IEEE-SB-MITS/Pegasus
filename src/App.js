import './App.css';
import Optin from './components/optin/optin';
import Preloader from './components/preloader/preloader';
import './components/Countdown/Timer'
import CountDown from './components/Countdown/Timer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <CountDown/>
        <Preloader/>
      </div>
    </div>
  );
}

export default App;
