import React, { useEffect, useState } from "react";

const Trivia = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [selectAnswers, setSelectAnswers] = useState(null);
  const [className, setClassName] = useState("answer");

  // const delay = () =>;

  const handleClick = (answer) => {
    setSelectAnswers(answer);
    setClassName("answer active");
    if (answer.correct) {
      setClassName("answer correct");
      setTimeout(() => {
        setQuestionNumber((prev) => prev + 1);
      }, 3000);
    } else {
      setClassName("answer wrong");
      setTimeout(() => {
        setStop(true);
      }, 3000);
    }
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
