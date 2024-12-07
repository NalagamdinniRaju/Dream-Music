import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { useMusicStore } from '../store/useMusicStore';
import { songs } from '../data/songs';
import clsx from 'clsx';

export function NowPlaying() {
  const { 
    currentSong, 
    isPlaying, 
    pauseSong, 
    playSong,
    playNextSong,
    playPreviousSong,
    toggleShuffle,
    toggleRepeat,
    isShuffled,
    isRepeated
  } = useMusicStore();
  
  const song = songs.find(s => s.id === currentSong) || songs[0];

  return (
    <div className="bg-gradient-to-br from-red-900/90 to-black/90 rounded-xl p-4 backdrop-blur-lg shadow-xl sticky top-6">
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-white mb-4">
        <h3 className="font-semibold">{song.title}</h3>
        <p className="text-sm text-gray-300">{song.artist}</p>
      </div>

      <div className="space-y-2">
        <div className="h-1 bg-gray-600/50 rounded-full">
          <div className="h-full w-1/2 bg-red-600 rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>2:15</span>
          <span>{song.duration}</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-4">
        <button 
          className={clsx(
            "text-gray-400 hover:text-white transition-colors",
            isShuffled && "text-red-600"
          )}
          onClick={toggleShuffle}
        >
          <Shuffle size={20} />
        </button>
        <button 
          className="text-gray-400 hover:text-white"
          onClick={playPreviousSong}
        >
          <SkipBack size={24} />
        </button>
        <button 
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          onClick={() => isPlaying ? pauseSong() : playSong(song.id)}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
        <button 
          className="text-gray-400 hover:text-white"
          onClick={playNextSong}
        >
          <SkipForward size={24} />
        </button>
        <button 
          className={clsx(
            "text-gray-400 hover:text-white transition-colors",
            isRepeated && "text-red-600"
          )}
          onClick={toggleRepeat}
        >
          <Repeat size={20} />
        </button>
      </div>
    </div>
  );
}