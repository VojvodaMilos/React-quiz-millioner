import React, { useEffect, useState } from "react";

const Trivia = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswers, setSelectAnswers] = useState(null);
  const [className, setClassName] = useState("answer");

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
        {question?.answers.map((a) => (
          <div
            className={selectAnswers === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
