import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../services/auth';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await signIn(email, password);
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
        <h1 className="text-2xl font-bold text-white">Login</h1>
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
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <Link to="/signup" className="block text-center text-blue-400 hover:text-blue-500">
          Create account
        </Link>
      </div>
    </div>
  );
}

export default Login;