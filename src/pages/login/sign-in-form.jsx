import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            id="password"
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>

        {/* Sign In Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-indigo-700"
            onClick={() => {
                navigate("/dashboard");
              }}
          >
            Sign In
          </button>
        </div>

        {/* Social Sign In Heading */}
        <div className="text-lg font-semibold text-gray-700 mt-6 mb-4">Sign in with:</div>

        {/* Social Sign In Buttons */}
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-red-700">
            Google
          </button>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700">
            Facebook
          </button>
          <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-500">
            Twitter
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <Link
            to="/signup" // Replace with your actual signup route
            className="text-indigo-600 font-bold hover:text-indigo-800"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
