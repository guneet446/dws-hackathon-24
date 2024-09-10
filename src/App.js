import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './pages';
import SignupForm from './pages/login/sign-up-form';
import SignIn from './pages/login/sign-in-form';
import { Questionnaire } from './pages/dashboard/questionnaire';
import PortfolioOverview from './pages/my-portfolio/my-portfolio';
import BasketBuilder from './pages/build-basket/build-basket';
import Leaderboard from './pages/gamezone/leaderboard';
import { Gamezone } from './pages/gamezone/gamezone';
import MyProfile from './pages/profile/profile';

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/my-portfolio" element={<PortfolioOverview />} />
          <Route path="/build-basket" element={<BasketBuilder />} />
          <Route path="/gamezone" element={<Gamezone />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/" element={<Navigate to="/signin" />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
