import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/5 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          StartupPitchHub
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-400">
            Dashboard
          </Link>
          <Link to="/ideas" className="text-white hover:text-blue-400">
            Ideas
          </Link>
          <Link to="/add-idea" className="text-white hover:text-blue-400">
            Post Idea
          </Link>
          <Link to="/investments" className="text-white hover:text-blue-400">
            Investments
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;