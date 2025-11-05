
const HandleCLick = ({start, stop, reset}) => {


  return (
    <div>
      <button className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto" onClick={start}> Start </button>
      <button className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto" onClick={stop}> Stop </button>
      <button className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto" onClick={reset}> Reset </button>
    </div>
  );
};

export default HandleCLick;
