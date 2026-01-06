import { useState, useEffect } from "react";
import HandleCLick from "./components/handleClick";
import Timer from "./components/timer";
import Timerdisplay from "./components/timerDisplay";

function App() {
  const clock = 10; //The const for the time

  const breakTime = 300; // The const for the break

  const [time, setTime] = useState(clock); // useState to setup the clock
  const [run, setRun] = useState(false); //false = No state changes. This useState runs the useEffect when it's launched by the user
  const [open, setOpen] = useState(false); // The state that opens the modal, headleeUI component
  const [ theBreak, setTheBreak] = useState(false); 

  
  /**********************    user actions   ***********************************/

  const startTimer = () => setRun(true); //function  => start tracking the time, =>  true because false makes the time stay the same
  const endTimer = () => setRun(false);
  const resetTimer = () => {
    setRun(false); // this line makes the code stop when it resets whithout "reset" button being pressed
     if (theBreak) {
       setTime(breakTime);
    }else {
      setTime (clock); 
     }
     // This returns to the very first time.
  }; 

  const skipBreak = () => {
    setTheBreak (false);
    setTime(clock);
    setRun(true); 
    setOpen(false)
  } 

  const startBreak =() => {
    setTheBreak(true); 
    setTime(breakTime); 
    setRun(false); 
    setOpen(false); 
  }

  /******************************* Engine ************************************/
  useEffect(() => {
    if (!run) return; // Do nothing if not touched, it means that if this is not in the top of the clock  gear (useEffect), the counter will go on by itself
    const interval = setInterval(() => {
      // Creates the const where we keep the setInterval
        setTime((prev) => {
          if (prev <= 1) { // if the prop is less or equal to one then 
            setRun(false), setOpen(true); // stop the effect of+ counting and open the modal 
            return 0; // the clock stays in zero while the modal remains open 
          } else {
            return prev - 1; // Otherwise count backwards 
          }},          
      );

      // we can acces to the state, we create a function prev and then we make it go backwards using prev -1;
    }, 1000); // If I add brakets, it'll be an array and react is expecting numbers, instead just return the number  , 1000); not [1000];
    return () => clearInterval(interval);
  }, [run]); // return this only when react changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="title">POMODORO</h1>

      <Timerdisplay time={time} break={theBreak}/>


      <HandleCLick start={startTimer} stop={endTimer} reset={resetTimer} />

      
      <Timer
        open={open}
        onBreak={startBreak}
        onSkipBreak = {skipBreak}
      />
      
    </div>
  );
}

export default App;
