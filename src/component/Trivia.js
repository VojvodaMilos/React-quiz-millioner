import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/src_sounds_play.mp3";
import correct from "../sounds/src_sounds_correct.mp3";
import wrong from "../sounds/src_sounds_wrong.mp3";

const Trivia = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswers, setSelectAnswers] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    console.log("kreni");
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, collback) => {
    setTimeout(() => {
      collback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectAnswers(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectAnswers(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, id) => (
          <div
            className={selectAnswers === a ? className : "answer"}
            onClick={() => handleClick(a)}
            key={id}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
