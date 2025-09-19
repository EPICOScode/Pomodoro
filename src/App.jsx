import { useState } from "react";
import HandleCLick from "./components/handleClick";

function App() {
  const [time, setTime] = useState(1500);

  const controlTime = () => {
    setInterval(() => {
      setTime = (prev) => prev - 1;
    }, 1000);
  };

  return (
    <>
      <h1 className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">
        POMODORO APP
      </h1>

      <h1>{time}</h1>

      <HandleCLick onClick={controlTime} />
    </>
  );
}

export default App;
