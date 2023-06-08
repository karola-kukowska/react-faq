import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const setOneQuestion = (id) => {
    setCurrentQuestion(id);
  };

  return (
    <section className="container">
      <h1>Frequently Asked Questions</h1>
      {questions.map((item) => (
        <SingleQuestion
          key={item.id}
          {...item}
          setOneQuestion={setOneQuestion}
          displayedQuestion={currentQuestion}
        />
      ))}
    </section>
  );
};

export default Questions;
