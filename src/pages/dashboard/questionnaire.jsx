import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Updated questions array with new questions
const questions = [
  {
    question: "What is your name?",
    type: 'text'
  },
  {
    question: "What is your age?",
    type: 'number'
  },
  {
    question: "What is your gender?",
    options: ["Male", "Female", "Other"],
    type: 'dropdown'
  },
  {
    question: "What is your country?",
    options: ["USA", "Canada", "UK", "India", "Australia"],
    type: 'dropdown'
  },
  {
    question: "Since when have you been investing?",
    options: ["Never", "1-2 years", "3-5 years", "5+ years"],
    type: 'radio'
  },
  {
    question: "Primary source of income",
    options: ["Salaried", "Business", "Retired", "Other investments"],
    type: 'radio'
  },
  {
    question: "What is your annual income?",
    options: ["0 - 50K", "50K - 100K", "100K - 200K", "200K - 400K", "400K +"],
    type: 'radio'
  },
  {
    question: "What is your monthly expenditure?",
    options: ["0 - 50K", "50K - 100K", "100K - 200K", "200K - 400K", "400K +"],
    type: 'radio'
  },
  {
    question: "How many dependants do you have? (kids, spouse, parents all inclusive)",
    options: ["0", "1", "2", "3", "4", "5+"],
    type: 'radio'
  },
  {
    question: "Marital Status",
    options: ["Married", "Unmarried"],
    type: 'radio'
  },
  {
    question: "How much drop can you handle in your portfolio?",
    options: ["Can't take", "0 to -10%", "-11% to -20%", "-21% to -30%", "Greater than -30%"],
    type: 'radio'
  },
];

export const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [textAnswer, setTextAnswer] = useState(""); // New state for text input
  const [numberAnswer, setNumberAnswer] = useState(""); // New state for number input
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextAnswer(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumberAnswer(event.target.value);
  };

  const moveToNextQuestion = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);
    localStorage.setItem('userAnswers', JSON.stringify(updatedAnswers));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/dashboard");
    }

    setSelectedOption("");
    setTextAnswer("");
    setNumberAnswer("");
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === 'text') {
      moveToNextQuestion(textAnswer);
    } else if (currentQuestion.type === 'number') {
      moveToNextQuestion(numberAnswer);
    } else if (selectedOption) {
      moveToNextQuestion(selectedOption);
    }
  };

  const handleSkipQuestion = () => {
    moveToNextQuestion(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Question {currentQuestionIndex + 1}</h2>
        <p className="text-lg mb-6 text-gray-700">{currentQuestion.question}</p>
        
        {/* Render different input types based on the question type */}
        {currentQuestion.type === 'radio' && (
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
                />
                <label className="text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        )}

        {currentQuestion.type === 'text' && (
          <input
            type="text"
            value={textAnswer}
            onChange={handleTextChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        )}

        {currentQuestion.type === 'number' && (
          <input
            type="number"
            value={numberAnswer}
            onChange={handleNumberChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        )}

        {currentQuestion.type === 'dropdown' && (
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select an option</option>
            {currentQuestion.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleNextQuestion}
            disabled={!(selectedOption || textAnswer || numberAnswer)}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${
              selectedOption || textAnswer || numberAnswer
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-indigo-300 cursor-not-allowed'
            } transition`}
          >
            {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
          </button>
          <button
            onClick={handleSkipQuestion}
            className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition font-semibold"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};
