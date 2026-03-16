import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getInvestments } from '../services/investments';
import { Link } from 'react-router-dom';

function Investments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    loadInvestments();
  }, []);

  async function loadInvestments() {
    const data = await getInvestments();
    setInvestments(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-white">Investments</h1>
        <Link to="/add-investment" className="mt-4 inline-block bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Add Investment</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {investments?.map((investment) => (
            <div key={investment.id} className="bg-white/10 backdrop-blur rounded-xl shadow-xl p-6 hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-xl font-bold text-white">Investment</h2>
              <p className="text-gray-300 mt-2">Amount: ${investment.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Investments;