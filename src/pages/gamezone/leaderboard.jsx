import React from 'react';

const leaderboardData = [
  { rank: 1, name: 'John Doe', score: 8, timeTaken: '5.4 mins' },
  { rank: 2, name: 'Emily Smith', score: 7, timeTaken: '6.2 mins' },
  { rank: 3, name: 'Michael Johnson', score: 7, timeTaken: '6.5 mins' },
  { rank: 4, name: 'Sophia Williams', score: 6, timeTaken: '7 mins' },
  { rank: 5, name: 'James Brown', score: 6, timeTaken: '7.5 mins' },
  { rank: 14, name: 'You', score: 6, timeTaken: '10 mins' },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Game Leaderboard</h2>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 border">Rank</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Score</th>
              <th className="px-4 py-2 border">Time Taken</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr
                key={index}
                className={`text-center ${player.name === 'You' ? 'bg-gray-200' : ''}`}
              >
                <td className="border px-4 py-2">{player.rank}</td>
                <td className="border px-4 py-2">{player.name}</td>
                <td className="border px-4 py-2">{player.score}</td>
                <td className="border px-4 py-2">{player.timeTaken}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
