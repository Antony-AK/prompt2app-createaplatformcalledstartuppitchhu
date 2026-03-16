import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../services/auth';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const result = await signUp(email, password);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    if (result.data?.user) {
      setUser(result.data.user);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="bg-white/10 backdrop-blur rounded-xl shadow-xl p-8 space-y-4">
        <h1 className="text-2xl font-bold text-white">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white/5 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/5 text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/5 text-white"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Signup
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <Link to="/login" className="block text-center text-blue-400 hover:text-blue-500">
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default Signup;