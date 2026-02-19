import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import EmissionsChart from '../components/Dashboard/EmissionsChart';
import { CloudLightning, Clock, Car } from 'lucide-react';

const Home = () => {
  const username = localStorage.getItem('carbonUser') || 'User';

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hello, {username}! 👋</h1>
        <p className="text-gray-500 mt-2">Here is your digital carbon footprint summary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<CloudLightning size={28} className="text-red-500" />} title="Total CO₂" value="403 g" desc="This week" colorClass="text-red-500 bg-red-500" />
        <StatCard icon={<Clock size={28} className="text-blue-500" />} title="Active Browsing" value="12h 45m" desc="This week" colorClass="text-blue-500 bg-blue-500" />
        <StatCard icon={<Car size={28} className="text-green-500" />} title="Car Equivalent" value="3.2 km" desc="Distance driven" colorClass="text-green-500 bg-green-500" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Weekly Emissions Trend</h2>
        <EmissionsChart />
      </div>
    </div>
  );
};

export default Home;