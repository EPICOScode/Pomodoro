const Timerdisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  // ` ${minutes}:${seconds.toString().padStart(2, "0")}`; if I want the number to be a string...

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-7xl">
          <span style={{ "--value": paddedMinutes, "--digits": 2 }}></span>
        </span>
        minutes
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-7xl">
          <span style={{ "--value": paddedSeconds, "--digits": 2 }}></span>
        </span>
        seconds
      </div>
    </div>
  );
};

export default Timerdisplay;
