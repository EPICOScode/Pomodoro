
const HandleCLick = ({start, stop, reset}) => {


  return (
    <div>
      <button className="btn"  onClick={start}> Start </button>
      <button className="btn" onClick={stop}> Stop </button>
      <button className="btn" onClick={reset}> Reset </button>
    </div>
  );
};

export default HandleCLick;
