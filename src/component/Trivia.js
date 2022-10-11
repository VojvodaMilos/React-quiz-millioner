import React, { useEffect, useState } from "react";
import play from "../sounds/src_sounds_play.mp3";
import correct from "../sounds/src_sounds_correct.mp3";
import wait from "../sounds/src_sounds_wait.mp3";
import wrong from "../sounds/src_sounds_wrong.mp3";

const Trivia = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [selectAnswers, setSelectAnswers] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    playSound.play();
  }, []);
  const playSound = new Audio(play);
  const waitAnswerSound = new Audio(wait);
  const correctSound = new Audio(correct);
  const wrongSound = new Audio(wrong);
  // const stopPlaySound = (pl) => {
  //   new Audio(pl).pause();
  // };

  const handleClick = (answer) => {
    waitAnswerSound.play();
    setSelectAnswers(answer);
    setClassName("answer active");
    setTimeout(() => {
      waitAnswerSound.pause();
      if (answer.correct) {
        correctSound.play();
        setClassName("answer correct");
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
        }, 4000);
      } else {
        wrongSound.play();
        setClassName("answer wrong");
        setTimeout(() => {
          setStop(true);
        }, 3000);
      }
    }, 5000);
  };

  return (
    <div className="trivia">
      <div className="question">{data[questionNumber - 1].question}</div>
      <div className="answers">
        {data[questionNumber - 1].answers.map((a, id) => {
          return (
            <div
              onClick={() => {
                handleClick(a);
              }}
              key={id}
              className={selectAnswers === a ? className : "answer"}
            >
              {a.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;
