import React from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = React.useState(null);
  // const [submitted, setSubmitted] = React.useState(false);

  // the use of useRef hook

  const PlayerName = React.useRef();

  // function handleChange(event) {
  //   setEnteredPlayerName(event.target.value);
  // }

  // click function

  function handleClick() {
    // setSubmitted(true);

    setEnteredPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2> */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={PlayerName}
          type="text"
          // value={enteredPlayerName}
          // onChange={(event) => handleChange(event)}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
