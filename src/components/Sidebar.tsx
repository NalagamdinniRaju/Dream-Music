import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react';
import { Music } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-12">
        <Music className="h-8 w-8 text-red-600" />
        <span className="text-xl font-bold"><span className="text-red-600">Dream</span>Music</span>
      </div>

      <nav className="flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-400 text-sm mb-4">MENU</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-red-600 hover:text-red-500 cursor-pointer">
              <Home className="text-red-600" size={20} /> Home
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer">
              <TrendingUp className="text-gray-300" size={20} /> Trends
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer">
              <Library className="text-gray-300" size={20} /> Library
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer">
              <Compass className="text-gray-300" size={20} /> Discover
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-4">GENERAL</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer">
              <Settings className="text-gray-300" size={20} /> Settings
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer">
              <LogOut className="text-gray-300" size={20} /> Log Out
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}