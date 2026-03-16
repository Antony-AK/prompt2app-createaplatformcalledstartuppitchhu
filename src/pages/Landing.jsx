import Navbar from '../components/Navbar';

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">StartupPitchHub</h1>
          <p className="mt-4 text-xl text-gray-300">Where founders meet investors</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;