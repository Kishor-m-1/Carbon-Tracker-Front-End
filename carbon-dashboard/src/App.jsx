import { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EcoLab from './pages/EcoLab';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/signUp';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('carbonUser'));

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className={isLoggedIn ? "container mx-auto p-6" : "flex-1 flex flex-col w-full"}>
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/eco-lab" element={<ProtectedRoute><EcoLab /></ProtectedRoute>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;