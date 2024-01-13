import React, { useRef } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = React.useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = React.useState(false);
  const [timerExpire, setTimeExpire] = React.useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpire(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        {timerExpire && "You have lost!"}
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {" "}
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
