import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({
  id,
  title,
  info,
  setOneQuestion,
  displayedQuestion,
}) => {
  const [showInfo, setShowInfo] = useState(displayedQuestion === id);

  const showQuestion = (id) => {
    setOneQuestion(id);
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          type="button"
          className="question-btn"
          onClick={() => showQuestion(id)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default SingleQuestion;
