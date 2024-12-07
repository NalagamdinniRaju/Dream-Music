import { Search } from 'lucide-react';

export function TopBar() {
  return (
    <div className="flex items-center justify-between p-6 bg-black/20">
      <nav className="flex gap-8">
        <a href="#" className="text-white hover:text-red-600">Music</a>
        <a href="#" className="text-gray-400 hover:text-white">Podcast</a>
        <a href="#" className="text-gray-400 hover:text-white">Live</a>
        <a href="#" className="text-gray-400 hover:text-white">Radio</a>
      </nav>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Michael Jackson"
          className="bg-black/40 text-white pl-10 pr-4 py-2 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
    </div>
  );
}