import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Flame } from 'lucide-react';

const LeetCodeCard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get('https://leetcode-stats-api.herokuapp.com/Krishna_Srivastava11244')
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Error fetching LeetCode stats:', err));
  }, []);

  if (!stats || stats.status === 'error') {
    return (
      <div className="text-white text-center p-4">
        Unable to fetch LeetCode stats.
      </div>
    );
  }

  const totalQuestions = 3632; // Use stats.totalQuestions if provided
  const pieData = [
    { name: 'Easy', value: stats.easySolved, color: '#00c49f' },
    { name: 'Medium', value: stats.mediumSolved, color: '#ffbb28' },
    { name: 'Hard', value: stats.hardSolved, color: '#ff8042' }
  ];

  return (
    <div className="bg-[#1A1A1D] text-white rounded-xl shadow-xl border border-yellow-600 p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-400">LeetCode Profile</h2>
        <a
          href="https://leetcode.com/Krishna_Srivastava11244"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md text-sm font-semibold transition"
        >
          View Profile
        </a>
      </div>

      {/* Circular Pie Chart */}
      <div className="flex justify-center items-center mb-6">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              stroke="none"
              isAnimationActive={true}
              label={true}
              labelLine={true}
              labelPosition="center"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#fff', color: '#333', padding: '10px', borderRadius: '5px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Solved Count Details */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">
          Total Solved: <span className="text-green-400">{stats.totalSolved}</span> / {totalQuestions}
        </p>
        <div className="flex justify-center gap-6 mt-2 text-sm">
          <span className="text-green-400">Easy: {stats.easySolved}</span>
          <span className="text-yellow-400">Medium: {stats.mediumSolved}</span>
          <span className="text-red-400">Hard: {stats.hardSolved}</span>
        </div>
      </div>

      {/* Rank */}
      <div className="text-center mb-4">
        <p className="text-base">📊 Global Ranking: <span className="font-bold text-cyan-400">{stats.ranking}</span></p>
      </div>

      {/* Daily Streak Panel */}
      <div className="bg-[#292929] border border-yellow-700 rounded-md p-3 text-sm flex items-center gap-3 justify-center">
        <Flame className="text-orange-400 animate-pulse" size={20} />
        <span className="text-orange-300">🔥 Daily Streak Panel Coming Soon</span>
      </div>
    </div>
  );
};

export default LeetCodeCard;