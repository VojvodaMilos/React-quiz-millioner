import React, { useRef } from "react";

const Start = ({ setStart }) => {
  const inputRef = useRef(null);

  return (
    <div className="start">
      <input
        placeholder="enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button
        className="startBtn"
        onClick={() => {
          setStart(inputRef.current.value);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
