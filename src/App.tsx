import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { ArtistHeader } from './components/ArtistHeader';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-red-900/20 to-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <TopBar />
        <div className="max-w-7xl mx-auto p-6">
          <ArtistHeader />
          <MainContent />
        </div>
      </main>
    </div>
  );
}

export default App;