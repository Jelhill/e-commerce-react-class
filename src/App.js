import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Route, Routes} from 'react-router'
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
