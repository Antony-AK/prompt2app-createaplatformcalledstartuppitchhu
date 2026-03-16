import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getIdeas } from '../services/ideas';

function Ideas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    loadIdeas();
  }, []);

  async function loadIdeas() {
    const data = await getIdeas();
    setIdeas(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-white">Ideas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {ideas?.map((idea) => (
            <div key={idea.id} className="bg-white/10 backdrop-blur rounded-xl shadow-xl p-6 hover:scale-[1.02] transition-all duration-300">
              <img src={idea.image_url} alt={idea.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl font-bold text-white mt-4">{idea.title}</h2>
              <p className="text-gray-300 mt-2">{idea.description}</p>
              <div className="mt-4 text-sm text-gray-400">{idea.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ideas;