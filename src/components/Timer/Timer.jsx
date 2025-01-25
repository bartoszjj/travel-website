import React from "react";

function Timer({ hours }) {
  const [time, setTime] = React.useState(hours * 60 * 60);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (time == 0) setTime(hours * 60 * 60);
      else setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  function formatTime() {
    let hours = Math.floor(time / (60 * 60));
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
  }

  return <span>{formatTime()}</span>;
}

export default Timer;
