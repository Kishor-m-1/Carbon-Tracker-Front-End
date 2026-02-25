import { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import EcoLab from './pages/EcoLab';
import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import SignUp from './pages/signUp';

=======
import Report from './pages/Report';
import SignUp from './pages/signUp';
>>>>>>> 1f9d6ff (almost but not complete)

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('carbonUser'));

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
<<<<<<< HEAD
      <div className="flex flex-col min-h-screen bg-gray-950 text-white font-sans">
=======
      <div className="flex flex-col min-h-screen bg-gray-950  w-full">
>>>>>>> 1f9d6ff (almost but not complete)
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className={isLoggedIn ? "container mx-auto p-6 w-full" : "flex-1 flex flex-col w-full"}>
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