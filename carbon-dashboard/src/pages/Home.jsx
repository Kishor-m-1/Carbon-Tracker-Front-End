import { Car, Clock, CloudLightning } from 'lucide-react';
import EmissionsChart from '../components/Dashboard/EmissionsChart';
import StatCard from '../components/Dashboard/StatCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const username = localStorage.getItem('carbonUser') || 'User';
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex">
          <h1 className="text-3xl font-bold text-white">Hello, {username}! 👋</h1>
        </div>
        <div>
          <button onClick={() => navigate('/report')} className="text-gray-700 mt-4 font-semibold text-xl bg-gray-100 p-2 px-4 border rounded border-gray-500 hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in-out">View detailed Report</button>
        </div>
      </div>
      <p className="text-gray-100 mt-2 mb-4">Here is your digital carbon footprint summary.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<CloudLightning size={28} className="text-red-500" />} title="Total CO₂" value="403 g" desc="This week" colorClass="text-red-500 bg-red-500" />
        <StatCard icon={<Clock size={28} className="text-blue-500" />} title="Active Browsing" value="12h 45m" desc="This week" colorClass="text-blue-500 bg-blue-500" />
        <StatCard icon={<Car size={28} className="text-green-500" />} title="Car Equivalent" value="3.2 km" desc="Distance driven" colorClass="text-green-500 bg-green-500 " />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Weekly Emissions Trend</h2>
        <EmissionsChart />
      </div>
    </div>
  );
};

export default Home;