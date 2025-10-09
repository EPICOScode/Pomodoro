
const HandleCLick = ({start, stop, reset}) => {


  return (
    <div>
      <button className='btn btn-blue' onClick={start}> Start </button>
      <button className='btn btn-blue' onClick={stop}> Stop </button>
      <button className='btn btn-blue' onClick={reset}> Reset </button>


    </div>
  );
};

export default HandleCLick;
