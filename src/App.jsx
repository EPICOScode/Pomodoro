import { useState, useEffect } from "react";
import HandleCLick from "./components/handleClick";

function App() {
  const clock = 1500;
  const [time, setTime] = useState(clock);
  const [run, setRun] = useState(false);

  const timeFixed = () => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => setRun(true); // This is the function I need to pass to start tracking the time 

  // let intervalId;
  useEffect(() => {
    if (!run) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);     // If I add brakets, it'll be an array and react is expecting numbers, instead just return the number  , 1000); not [1000]; 
    return () => clearInterval(interval); 
  }, [run]);   // return this only when react changes 

  return (
    <>
      <h1 className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">
        POMODORO APP
      </h1>

      <h1>{timeFixed()}</h1>

      <HandleCLick onClick={startTimer} />
    </>
  );
}

export default App;
