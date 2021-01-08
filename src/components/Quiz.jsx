import React, { useContext, useState } from "react";
import appcontext from "../context/app-context";
import Question from "./Question";
import "../styles/Quiz.css";
import { Container, Row, ProgressBar } from "react-bootstrap";
import { postAnswer, getScore } from "../lib/fetches";

const Quiz = () => {
  const { currentExam } = useContext(appcontext);
  const [index, setIndex] = useState(0);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const lengthTest = currentExam.questions.length;
  const [selected, setSelected] = useState(false);

  const setResponse = async (body) => {
    await setCurrentAnswer(body);
    setSelected(true);
    console.log(currentAnswer);
  };

  const goNext = async () => {
    let i = index + 1;
    console.log(lengthTest);
    if (i < lengthTest) {
      await postAnswer(currentExam._id, currentAnswer);
      const score = await getScore(currentExam._id);
      console.log(score);
      setIndex(i);
      setSelected(false);
    } else {
      setEnd(true);
    }
  };

  return (
    <div className="quiz">
      <ProgressBar animated now={((index + 1) / lengthTest) * 100} />
      <Container>
        <h2>{!end ? `Question ${index + 1}` : "Final Score"}</h2>
        {!end ? (
          <>
            <Question
              setResponse={setResponse}
              question={currentExam.questions[index].question}
              selected={currentAnswer.answer}
              index={index}
            />
            <Row>
              <span
                className={`quiz__next-btn  ${selected && "selected"}`}
                onClick={goNext}
              >
                NEXT
              </span>
            </Row>
          </>
        ) : (
          <>
            <p className="mt-4">Your responded correctly to: </p>
            <h4 className="mt-4">
              {currentExam.score}{" "}
              {currentExam.score == 1 ? `question` : "questions"}
            </h4>
          </>
        )}
      </Container>
    </div>
  );
};

export default Quiz;
