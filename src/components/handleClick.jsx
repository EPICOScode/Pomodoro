import { useState } from "react";

const HandleCLick = () => {
  const [timer, setTimer] = useState(1500);

  const handleTheClick = () => {
    const minutes = timer.setMinutes(25);
  };

  return (
    <>
      <h1> </h1>
    </>
  );
};

export default HandleCLick;
