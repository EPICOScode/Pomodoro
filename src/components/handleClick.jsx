import { useState } from "react";

const HandleCLick = () => {
  
  const [timer, setTimer] = useState(1500);
  
  const handleTheClick = () => {    
    setInterval(() => {
      setTimer ((prev) => prev - 1)
    }, 1000);
   
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleTheClick}> Start </button>
    </div>
  );
};

export default HandleCLick;
