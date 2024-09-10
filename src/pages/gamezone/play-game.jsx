import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const financialQuestions = [
  // Your questions array remains the same
  {
    question: "What is a stock?",
    options: [
      "A type of bond",
      "A share in the ownership of a company",
      "A loan from a bank",
      "A type of insurance policy"
    ],
    answer: 1
  },
  {
    question: "What does 'APR' stand for?",
    options: [
      "Annual Percentage Rate",
      "Annual Payment Rate",
      "Annual Payback Ratio",
      "Authorized Payment Return"
    ],
    answer: 0
  },
  {
    question: "What is a mutual fund?",
    options: [
      "A pool of money from many investors to buy securities",
      "A type of savings account",
      "A retirement fund",
      "A government bond"
    ],
    answer: 0
  },
  {
    question: "What is the primary purpose of diversification?",
    options: [
      "To maximize returns",
      "To reduce risk",
      "To increase liquidity",
      "To lower taxes"
    ],
    answer: 1
  },
  {
    question: "What is a 401(k)?",
    options: [
      "A type of credit card",
      "An employer-sponsored retirement savings plan",
      "A government bond",
      "A type of life insurance"
    ],
    answer: 1
  },
  {
    question: "What does 'liquidity' refer to in finance?",
    options: [
      "The ability to buy assets quickly",
      "The availability of cash or assets that can be quickly converted to cash",
      "The interest rate on loans",
      "The risk of investment losses"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of a credit score?",
    options: [
      "To determine investment risk",
      "To measure an individual's creditworthiness",
      "To calculate savings interest",
      "To evaluate insurance premiums"
    ],
    answer: 1
  },
  {
    question: "What is the difference between a Roth IRA and a Traditional IRA?",
    options: [
      "Roth IRA contributions are tax-deductible, Traditional IRA withdrawals are tax-free",
      "Traditional IRA contributions are tax-deductible, Roth IRA withdrawals are tax-free",
      "Both are the same",
      "Roth IRA has higher contribution limits"
    ],
    answer: 1
  },
  {
    question: "What is a bond?",
    options: [
      "A type of stock",
      "A loan made to a corporation or government",
      "A savings account",
      "A type of mutual fund"
    ],
    answer: 1
  },
  {
    question: "What is an emergency fund?",
    options: [
      "A fund used for investing in stocks",
      "A savings account for unexpected expenses",
      "A retirement savings account",
      "A fund for paying off debts"
    ],
    answer: 1
  }
];

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isStarted && !showScore) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, startTime, showScore]);

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(Date.now());
  };

  const handleAnswerOptionClick = (index) => {
    if (index === financialQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < financialQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setConfetti(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {isStarted && !showScore && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-3 mt-[205px] rounded-lg -translate-x-[260px] translate-y-20 shadow-lg flex items-center">
          <span className="font-bold text-xl mr-2">Time:</span>
          <span className="text-2xl">{elapsedTime} s</span>
        </div>
      )}
      {!isStarted ? (
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={handleStart}
        >
          Start Game
        </button>
      ) : showScore ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          {confetti && <Confetti />}
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            You scored {score} out of {financialQuestions.length}!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Time taken: {elapsedTime} seconds
          </p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Question {currentQuestion + 1}/{financialQuestions.length}
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            {financialQuestions[currentQuestion].question}
          </p>
          {financialQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-6 py-3 mb-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
              onClick={() => handleAnswerOptionClick(index)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
