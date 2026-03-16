import Navbar from '../components/Navbar';
import { seedDemoData } from '../services/seed';
import { useEffect, useState } from 'react';
import { getIdeas } from '../services/ideas';

function Dashboard() {
  const [ideas, setIdeas] = useState([]);

  const handleLoadData = async () => {
    await seedDemoData();
    alert('Data loaded successfully!');
    fetchIdeas();
  };

  const fetchIdeas = async () => {
    const fetchedIdeas = await getIdeas();
    setIdeas(fetchedIdeas);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <button 
          onClick={handleLoadData} 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Load Data
        </button>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas?.map(idea => (
            <div key={idea.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-gray-800">{idea.title}</h2>
              <p className="text-gray-600">{idea.description}</p>
              <img src={idea.image_url} alt={idea.title} className="mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;