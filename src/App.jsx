import { useState, useEffect } from "react";
import HandleCLick from "./components/handleClick";
import Break from "./components/timer";
import Timerdisplay from "./components/features/timerDisplay";
  
function App() {
  const clock = 10;
  const [time, setTime] = useState(clock); // useState to setup the clock
  const [run, setRun] = useState(false); //false = No state changes. This useState runs the useEffect when it's launched by the user
  const [open, setOpen] = useState(false); // The state that opens the modal, headleeUI component

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
      <div className="flex flex-col items-center justify-center min-h-screen"> 
        <h1 className="">POMODORO</h1>

        <Timerdisplay time={time}/>

        <HandleCLick start={startTimer} stop={endTimer} reset={resetTimer} />
        <Break  
          open={open}
          setOpen={setOpen}
          setTime={resetTimer}
          setRun={startTimer}
        />
      </div>
    );
  }

export default App;
