import React, { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

export default function StrangerTimer() {
  const TOTAL_TIME = 24 * 60 * 60 * 1000; // 

  const [timerData, setTimerData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isEnded, setIsEnded] = useState(false); 

  useEffect(() => {
    const ref = doc(db, "hackathon_timer", "timer");

    const unsub = onSnapshot(ref, (snapshot) => {
      setTimerData(snapshot.data());
    });

    return () => unsub();
  }, []);

  // Update timer every second
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
        setIsEnded(true); // ✅ trigger end screen
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerData]);

  // START
  const startTimer = async () => {
    const ref = doc(db, "hackathon_timer", "timer");
    await updateDoc(ref, {
      startTime: Date.now(),
      elapsedTime: 0,
      status: "running",
    });
    setIsEnded(false); // ✅ reset end screen when restarted
  };

  // PAUSE
  const pauseTimer = async () => {
    if (!timerData) return;
    const ref = doc(db, "hackathon_timer", "timer");

    await updateDoc(ref, {
      elapsedTime: Date.now() - timerData.startTime,
      status: "paused",
    });
  };

  // RESUME
  const resumeTimer = async () => {
    if (!timerData) return;
    const ref = doc(db, "hackathon_timer", "timer");

    await updateDoc(ref, {
      startTime: Date.now() - timerData.elapsedTime,
      status: "running",
    });
  };

  // Button Logic
  const toggleTimer = () => {
    if (!timerData) return;

    if (timerData.status === "idle") startTimer();
    else if (timerData.status === "running") pauseTimer();
    else resumeTimer();
  };

  // Format Time
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

  // ✅ END SCREEN (NO STYLE CHANGE)
  if (isEnded) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-red-700 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>

        <h1 className="text-5xl md:text-7xl font-ITCMedium font-bold tracking-[0.25em] text-red-600 uppercase drop-shadow-[0_0_12px_rgba(185,28,28,0.8)]">
          HACKATHON ENDED
        </h1>

        <p className="mt-6 text-[10px] md:text-xs tracking-[1em] text-red-900/60 font-mono uppercase">
          PEGASUS 4.0 — SUBMISSIONS CLOSED
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-red-700 relative overflow-hidden select-none">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>

      {/* Title */}
      <header className="relative z-10 flex flex-col items-center mb-16">
        <h1 className="text-5xl md:text-7xl font-ITCMedium font-bold tracking-[0.25em] text-red-600 uppercase drop-shadow-[0_0_12px_rgba(185,28,28,0.8)]">
          PEGASUS 4.0
        </h1>
      </header>

      {/* Timer */}
      <main className="relative z-10 flex items-center gap-2 md:gap-12">
        <TimeUnit value={hrs} label="Hours" />
        <span className="text-4xl md:text-7xl font-serif text-red-700 mt-[-2rem] animate-pulse">
          :
        </span>
        <TimeUnit value={mins} label="Minutes" />
        <span className="text-4xl md:text-7xl font-serif text-red-700 mt-[-2rem] animate-pulse">
          :
        </span>
        <TimeUnit value={secs} label="Seconds" />
      </main>

      {/* CONTROL BUTTON */}
      <button
        onClick={toggleTimer}
        className="relative z-10 mt-14 px-10 py-2 text-lg tracking-widest font-bold text-black bg-red-600 rounded-md 
                   transition-all duration-300 font-serif"
      >
        {getButtonText()}
      </button>

      {/* Footer */}
      <footer className="absolute bottom-12 z-10">
        <p className="text-[10px] md:text-xs tracking-[1em] text-red-900/60 font-mono uppercase">
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
      <span className="text-7xl md:text-[14rem] font-bold font-serif text-red-600 drop-shadow-[0_0_25px_rgba(185,28,28,0.6)]">
        {value}
      </span>
      <span className="mt-4 text-[9px] md:text-xs tracking-[0.4em] text-red-900/80 font-bold uppercase border-t border-red-950 pt-2 w-full text-center">
        {label}
      </span>
    </div>
  );
}
