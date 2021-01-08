import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/Question.css";

function Question({ question, setResponse, selected, index }) {
  // question.duration * 1000;
  useEffect(() => {
    const countDown = setTimeout(() => {
      return () => {
        clearTimeout(countDown);
      };
    }, [question]);
  });
  return (
    <div className="question">
      {question.answers && (
        <>
          <Col sm={12} md={6} className="question__box1">
            <p className="question__text">{question.text}</p>
          </Col>
          <Col className="question__box2" sm={12} md={{ span: 4, offset: 2 }}>
            {question.answers.map((res, i) => (
              <span
                className={`question__answer ${i === selected && " selected"}`}
                onClick={() =>
                  setResponse({ question: question._id, answer: i })
                }
              >
                <span>{res.text}</span>
              </span>
            ))}
          </Col>
        </>
      )}
    </div>
  );
}

export default Question;
