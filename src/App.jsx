import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getSession } from './services/auth';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Ideas from './pages/Ideas';
import AddIdea from './pages/AddIdea';
import Investments from './pages/Investments';
import AddInvestment from './pages/AddInvestment';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  async function loadSession() {
    const session = await getSession();
    if (session) {
      setUser(session.user);
    }
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard user={user} />} />
      <Route path="/ideas" element={<Ideas user={user} />} />
      <Route path="/add-idea" element={<AddIdea user={user} />} />
      <Route path="/investments" element={<Investments user={user} />} />
      <Route path="/add-investment" element={<AddInvestment user={user} />} />
    </Routes>
  );
}

export default App;