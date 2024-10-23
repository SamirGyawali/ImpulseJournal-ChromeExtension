import logo from './logo.svg';
import Dashboard from './routes/dashboard/Dashboard';
import Homepage from './routes/homepage/Homepage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
