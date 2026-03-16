import { useState } from 'react';
import { createInvestment } from '../services/investments';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function AddInvestment() {
  const [ideaId, setIdeaId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const investment = { idea_id: ideaId, investor_id: 'current_user_id', amount: parseFloat(amount) };
    const { error } = await createInvestment(investment);
    if (error) {
      console.error('Error creating investment:', error);
      return;
    }
    navigate('/investments');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-white">Add Investment</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-white">Idea ID</label>
            <input type="text" value={ideaId} onChange={(e) => setIdeaId(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-white">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required />
          </div>
          <button type="submit" className="mt-4 inline-block bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddInvestment;