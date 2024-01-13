import React, { useRef } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = React.useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = React.useState(false);
  // const [timerExpire, setTimeExpire] = React.useState(false);

  const [timeRemaining, setTimeRemaining] = React.useState(targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    // timer.current = setTimeout(() => {
    // instead of using the setTimeout we will opt to use the setInterval
    timer.current = setInterval(() => {
      // setTimeExpire(true);
      // dialog.current.showModal();
      setTimeRemaining((prevTimeRemaing) => prevTimeRemaing - 10);
    }, 10);
    // }, targetTime * 1000);

    // setTimerStarted(true);
  }

  function handleStop() {
    // clearTimeout(timer.current);
    dialog.current.showModal();

    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        {/* {timerExpire && "You have lost!"} */}
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          {/* instead of timerStarted we will use the timeIsActive */}
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {" "}
            {timeIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
