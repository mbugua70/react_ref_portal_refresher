import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const userLogs = remainingTime <= 0;
    const timeRemaingOutput = (remainingTime / 1000).toFixed(2);
    const scores = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    return createPortal(
      <>
        <dialog ref={ref} className="result-modal" onClose={onReset}>
          {/* <h2>{userLogs && "You lost"}</h2>
           */}

          {userLogs && <h2>You lost</h2>}
          {!userLogs && <h2>Your score: {scores}</h2>}
          <p>
            The target time was <strong>{targetTime} seconds.</strong>
          </p>

          <p>
            You stopped the timer withe{" "}
            <strong> {timeRemaingOutput} seconds left.</strong>
          </p>

          <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
          </form>
        </dialog>
      </>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
