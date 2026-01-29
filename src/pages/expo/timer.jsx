import React, { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import pegasusLogo from "../../assets/ll4.png";
export default function StrangerTimer() {
  const TOTAL_TIME = 24 * 60 * 60 * 1000; // 24 hours
  const ADMIN_PASSWORD = "PEGASUS2026"; // change password here

  const [timerData, setTimerData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isEnded, setIsEnded] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPassword, setAuthPassword] = useState("");

  useEffect(() => {
    const ref = doc(db, "hackathon_timer", "timer");

    const unsub = onSnapshot(ref, (snapshot) => {
      setTimerData(snapshot.data());
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!timerData) return;

    const interval = setInterval(() => {
      let elapsed = timerData.elapsedTime || 0;

      if (timerData.status === "running") {
        elapsed = Date.now() - timerData.startTime;
      }

      const remaining = TOTAL_TIME - elapsed;

      if (remaining <= 0) {
        setTimeLeft(0);
        setIsEnded(true);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerData]);

  const startTimer = async () => {
    const ref = doc(db, "hackathon_timer", "timer");
    await updateDoc(ref, {
      startTime: Date.now(),
      elapsedTime: 0,
      status: "running",
    });
    setIsEnded(false);
  };

  const pauseTimer = async () => {
    if (!timerData) return;
    const ref = doc(db, "hackathon_timer", "timer");

    await updateDoc(ref, {
      elapsedTime: Date.now() - timerData.startTime,
      status: "paused",
    });
  };

  const resumeTimer = async () => {
    if (!timerData) return;
    const ref = doc(db, "hackathon_timer", "timer");

    await updateDoc(ref, {
      startTime: Date.now() - timerData.elapsedTime,
      status: "running",
    });
  };

  const restartTimer = async () => {
    const ref = doc(db, "hackathon_timer", "timer");
    await updateDoc(ref, {
      startTime: 0,
      elapsedTime: 0,
      status: "idle",
    });
    setIsEnded(false);
    setTimeLeft(TOTAL_TIME);
  };

  const toggleTimer = () => {
    if (!timerData) return;

    if (timerData.status === "idle") startTimer();
    else if (timerData.status === "running") pauseTimer();
    else resumeTimer();
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return {
      hrs: String(hrs).padStart(2, "0"),
      mins: String(mins).padStart(2, "0"),
      secs: String(secs).padStart(2, "0"),
    };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  const getButtonText = () => {
    if (!timerData) return "LOADING...";
    if (timerData.status === "idle") return "START";
    if (timerData.status === "running") return "PAUSE";
    return "RESUME";
  };

  // 🔐 AUTH SCREEN
  if (!isAuthenticated) {
    return (
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-red-700 relative font-serif">

        <div className="relative z-10 w-[90%] sm:w-full max-w-md p-6 sm:p-8 border border-red-900/30 bg-black/40 backdrop-blur-md rounded-lg shadow-2xl">
          <div className="mb-8 text-center">
            <h2 className="font-bold tracking-tighter text-red-600 animate-pulse text-[clamp(1.8rem,4vw,2.5rem)]">
              ADMIN ACCESS
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-800 to-transparent mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-red-500 block mb-2 ml-1">
                Enter Password
              </label>
              <input
                type="password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (authPassword === ADMIN_PASSWORD ? setIsAuthenticated(true) : alert("Access Denied ❌"))}
                className="w-full px-4 py-3 bg-red-950/10 border border-red-900/50 text-red-500 outline-none rounded focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-center tracking-widest"
              />
            </div>

            <button
              onClick={() => {
                if (authPassword === ADMIN_PASSWORD) {
                  setIsAuthenticated(true);
                } else {
                  alert("Access Denied");
                }
              }}
              className="w-full py-3 bg-red-700 hover:bg-red-600 text-black font-black tracking-[0.2em] rounded transition-all active:scale-95 shadow-[0_0_15px_rgba(185,28,28,0.4)]"
            >
              AUTHORIZE
            </button>
          </div>

          <div className="mt-8 flex justify-between items-center opacity-80">
            <span className="text-[8px] tracking-widest uppercase">Secured by Pegasus-26</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-red-600 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-red-900 rounded-full"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .font-serif {
            font-family: "ITC Benguiat", "Times New Roman", serif;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(185,28,28,0.8); }
            50% { opacity: 0.8; text-shadow: 0 0 20px rgba(185,28,28,1); }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </div>
    );
  }

  // ⛔ END SCREEN
  if (isEnded) {
    return (
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-red-700 relative select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>

        <h1 className="font-ITCMedium font-bold tracking-[0.2em] text-red-600 uppercase drop-shadow-[0_0_12px_rgba(185,28,28,0.8)]
          text-[clamp(2rem,6vw,5rem)]">
          HACKATHON ENDED
        </h1>

        <button
          onClick={restartTimer}
          className="mt-10 px-8 py-2 bg-red-600 text-black font-bold rounded"
        >
          RESTART
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-red-700 relative select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>

      <header className="relative z-10 flex flex-col items-center mb-16">
        <img
          src={pegasusLogo} 
          alt="PEGASUS 4.0"
          className="drop-shadow-[0_0_12px_rgba(185,28,28,0.8)] 
                    w-[400px] md:w-[500px]"
        />
      </header>

      <main className="relative z-10 flex items-center gap-1 sm:gap-4 md:gap-12 flex-wrap justify-center">
        <TimeUnit value={hrs} label="Hours" />
        <span className="text-[clamp(2rem,6vw,5rem)] font-serif text-red-700 animate-pulse">:</span>
        <TimeUnit value={mins} label="Minutes" />
        <span className="text-[clamp(2rem,6vw,5rem)] font-serif text-red-700 animate-pulse">:</span>
        <TimeUnit value={secs} label="Seconds" />
      </main>

      <div className="flex gap-3 sm:gap-6 mt-8 sm:mt-14 relative z-10 flex-wrap justify-center mb-10">
        <button
          onClick={toggleTimer}
          className="px-6 sm:px-10 py-2 text-sm sm:text-lg tracking-widest font-bold text-black bg-red-600 rounded-md transition-all duration-300 font-serif"
        >
          {getButtonText()}
        </button>

        <button
          onClick={restartTimer}
          className="px-6 sm:px-10 py-2 text-sm sm:text-lg tracking-widest font-bold text-red-600 border border-red-600 rounded-md transition-all duration-300 font-serif"
        >
          RESTART
        </button>
      </div>

      <footer className="absolute bottom-6 sm:bottom-12 z-10">
        <p className="text-[8px] sm:text-xs tracking-[0.6em] sm:tracking-[1em] text-red-900/60 font-mono uppercase">
          MITS, Varikoli — 2026
        </p>
      </footer>

      <style jsx>{`
        .font-serif {
          font-family: "ITC Benguiat", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold font-serif text-red-600 drop-shadow-[0_0_25px_rgba(185,28,28,0.6)]
        text-[clamp(2.8rem,10vw,14rem)] leading-none">
        {value}
      </span>

      <span className="mt-2 sm:mt-4 text-[clamp(0.45rem,1vw,0.8rem)]
        tracking-[0.3em] sm:tracking-[0.4em] text-red-900/80 font-bold uppercase border-t border-red-950 pt-1 sm:pt-2 w-full text-center">
        {label}
      </span>
    </div>
  );
}
