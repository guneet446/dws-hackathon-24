import React, { useState, useEffect } from "react";
import { descriptions, quizData } from "./quizData";
import Header from "../dashboard/header";


const PersonalityQuiz = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  let who;

  // Handler for selecting an option
  const handleAnswerSelect = (score) => {
    setAnswers([...answers, score]);

    if (currentScenario === 10) {
      setIsComplete(true);
    } else {
      setCurrentScenario(currentScenario + 1);
    }
  };

  // Calculate personality type based on answers
  const calculatePersonality = () => {
    const scoreCount = {
      conservative: 0,
      balanced: 0,
      riskTaker: 0,
      neutral: 0,
      cautious: 0
    };

    answers.forEach((answer) => {
      scoreCount[answer] += 1;
    });

    const maxScore = Math.max(
      scoreCount.conservative,
      scoreCount.balanced,
      scoreCount.riskTaker,
      scoreCount.neutral,
      scoreCount.cautious
    );


    if (scoreCount.conservative === maxScore) {
        who = "conservative";
        return "Conservative Investor";
    }
    if (scoreCount.balanced === maxScore) {
        who = "balanced";
        return "Balanced Investor";
    } 
    if (scoreCount.riskTaker === maxScore) {
        who = "riskTaker";
        return "Risk-Taker";
    } 
    if (scoreCount.cautious === maxScore) {
        who="cautious"
        return "Cautious"
    }
    who = "moderate";
    return "Neutral Investor";
  };

  if (!quizStarted) {
    return (
        <><Header /><div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Discover Your Investment Personality</h2>
                <p className="text-lg mb-4">Take our quiz to find out what kind of investor you are and make more informed investment decisions.</p>
                <button
                    onClick={() => setQuizStarted(true)}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                    Take Quiz
                </button>
            </div>
        </div></>
    );
  }

  return (
    <><Header /><div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Investment Personality Quiz</h2>

              {isComplete ? (
                  <div className="h-full bg-gray-100 p-8 flex flex-col items-center justify-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                          <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
                          <p className="text-lg mb-4">Your investment personality is <span className="font-semibold">{calculatePersonality()}</span>.</p>
                          <p className="text-gray-600">{descriptions[who]}</p>
                      </div>
                  </div>
              ) : (
                  <div>
                      <h3 className="text-lg font-semibold mb-4">
                          {quizData[currentScenario].scenario}
                      </h3>
                      <ul className="space-y-4">
                          {quizData[currentScenario].options.map((option, index) => (
                              <li key={index}>
                                  <button
                                      onClick={() => handleAnswerSelect(option.score)}
                                      className="w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300 rounded-lg"
                                  >
                                      {option.answer}
                                  </button>
                              </li>
                          ))}
                      </ul>
                  </div>
              )}
          </div>
      </div></>
  );
};

export default PersonalityQuiz;
