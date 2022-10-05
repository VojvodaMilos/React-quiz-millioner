import { useRef } from "react";

const Start = ({ setUsername }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    setUsername(inputRef.current.value) && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        placeholder="enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
