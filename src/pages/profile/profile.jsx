import React, { useState, useEffect } from 'react';
import Header from '../dashboard/header';

// Sample questions and their options
const questions = [
  {
    question: "What is your name?",
    options: [],
  },
  {
    question: "What is your age?",
    options: [],
  },
  {
    question: "What is your gender?",
    options: ["Male", "Female", "Non-binary", "Prefer not to say"],
  },
  {
    question: "What is your country?",
    options: ["USA", "Canada", "UK", "Australia", "India", "Other"],
  },
  {
    question: "Since when have you been investing?",
    options: ["Never", "1-2 years", "3-5 years", "5+ years"],
  },
  {
    question: "Primary source of income",
    options: ["Salaried", "Business", "Retired", "Other investments"],
  },
  {
    question: "What is your annual income?",
    options: ["0 - 50K", "50K - 100K", "100K - 200K", "200K - 400K", "400K +"],
  },
  {
    question: "What is your monthly expenditure?",
    options: ["0 - 50K", "50K - 100K", "100K - 200K", "200K - 400K", "400K +"],
  },
  {
    question: "How many dependants do you have? (kids, spouse, parents all inclusive)",
    options: ["0", "1", "2", "3", "4", "5+"],
  },
  {
    question: "Marital Status",
    options: ["Married", "Unmarried"],
  },
  {
    question: "How much drop can you handle in your portfolio?",
    options: ["Can't take", "0 to -10%", "-11% to -20%", "-21% to -30%", "Greater than -30%"],
  }
];

const MyProfile = () => {
  const [answers, setAnswers] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load answers from local storage
    const storedAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
    setAnswers(storedAnswers);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem('userAnswers', JSON.stringify(answers));
    setIsEditing(false);
  };

  const handleChange = (questionIndex, newAnswer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: newAnswer
    }));
  };

  return (
    <><Header /><div className="min-h-screen bg-gray-100 p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h2>
              {questions.map((q, index) => (
                  <div key={index} className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-700">{q.question}</h3>
                      {isEditing ? (
                          q.options.length > 0 ? (
                              <select
                                  value={answers[index] || ''}
                                  onChange={(e) => handleChange(index, e.target.value)}
                                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                              >
                                  <option value="" disabled>Select an option</option>
                                  {q.options.map((option, optionIndex) => (
                                      <option key={optionIndex} value={option}>
                                          {option}
                                      </option>
                                  ))}
                              </select>
                          ) : (
                              <input
                                  type={index === 1 ? "number" : "text"}
                                  value={answers[index] || ''}
                                  onChange={(e) => handleChange(index, e.target.value)}
                                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg" />
                          )
                      ) : (
                          <p className="text-gray-600">{answers[index] || 'Not answered'}</p>
                      )}
                  </div>
              ))}
              <div className="flex justify-between mt-4">
                  {isEditing ? (
                      <button
                          onClick={handleSave}
                          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                          Save
                      </button>
                  ) : (
                      <button
                          onClick={handleEdit}
                          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                          Edit
                      </button>
                  )}
              </div>
          </div>
      </div></>
  );
};

export default MyProfile;
