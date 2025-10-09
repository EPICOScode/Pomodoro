import { useState, useEffect } from "react";
import HandleCLick from "./components/handleClick";

function App() {
  const clock = 1500;
  const [time, setTime] = useState(clock);
  const [run, setRun] = useState(false);  //false = No state changes

  const timeFixed = () => {
    const minutes = Math.floor(time/60); // state divided in 60 == 25, math.floor eliminates decimals 
    const secs = time % 60;  // the reminder of what we had divided == 0  
    return ` ${minutes} : ${secs.toString().padStart(2, "0")} `; // 25 : secs into string = 2 == length, "0" is the number to start with 
  };

  const startTimer = () => setRun(true); //function  => start tracking the time, =>  true cause false makes the time stay the same 
  const endTimer = () => setRun(false);  
  const resetTimer = () => {setRun (false); // this line makes the code stop when it reset whithout reset button being pressed 
    setTime(clock) // This returns to the very first time. 
   }
  
  useEffect(() => {
    if (!run) return; // Do nothing if not touched 
    const interval = setInterval(() => {   // Creates the const where we keep the setInterval 
      setTime((prev) => prev - 1); // we can acces to the state, we create a function prev and then we make it go backwards 
    }, 1000); // If I add brakets, it'll be an array and react is expecting numbers, instead just return the number  , 1000); not [1000];
    return () => clearInterval(interval); 
  }, [run]); // return this only when react changes

  return (
    <>
      <h1 className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">
        POMODORO APP
      </h1>

      <h1>{timeFixed()}</h1>

      <HandleCLick 
      start={startTimer} 
      stop={endTimer} 
      reset={resetTimer}      
      />
    </>
  );
}

export default App;
