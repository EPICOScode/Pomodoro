import { useState, useEffect } from "react";
import HandleCLick from "./components/handleClick";
import Break from "./components/timer";

function App() {
  const clock = 3;
  const [time, setTime] = useState(clock); // useState to setup the clock
  const [run, setRun] = useState(false); //false = No state changes. This useState runs the useEffect when it's launched by the user
  const [open, setOpen] = useState(false); // The state that opens the modal, headleeUI component 

  const timeFixed = () => {
    const minutes = Math.floor(time / 60); // state divided in 60 == 25, math.floor eliminates decimals
    const secs = time % 60; // the reminder of what we had divided == 0
    return ` ${minutes} : ${secs.toString().padStart(2, "0")} `; // 25 : secs into string = 2 == length, "0" is the number to start with
  };

  const startTimer = () => setRun(true); //function  => start tracking the time, =>  true cause false makes the time stay the same
  const endTimer = () => setRun(false);
  const resetTimer = () => {
    setRun(false); // this line makes the code stop when it resets whithout "reset" button being pressed
    setTime(clock); // This returns to the very first time.
  };

  useEffect(() => {
    if (!run) return; // Do nothing if not touched, it means that if this is not in the top of the clock  gear (useEffect), the counter will go on by itself
    const interval = setInterval(() => {
      // Creates the const where we keep the setInterval
      setTime((prev) => {
        if (prev <= 1) {
          setRun(false), setOpen(true);
          return 0;
        } else {
          return prev - 1;
        }
      });
      // we can acces to the state, we create a function prev and then we make it go backwards using prev -1;
    }, 1000); // If I add brakets, it'll be an array and react is expecting numbers, instead just return the number  , 1000); not [1000];
    return () => clearInterval(interval);
  }, [run]); // return this only when react changes

  return (
    <>
      <h1 className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">
        POMODORO
      </h1>

      <h1>{timeFixed()}</h1>

      <HandleCLick start={startTimer} stop={endTimer} reset={resetTimer} />
      <Break
        open={open}
        setOpen={setOpen}
        setTime={resetTimer}
        setRun={startTimer}
      />
    </>
  );
}

export default App;
