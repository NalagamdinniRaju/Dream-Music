import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Music2 } from 'lucide-react';
import { Song } from '../types/song';
import { useMusicStore } from '../store/useMusicStore';
import clsx from 'clsx';

interface SongItemProps {
  song: Song;
  index: number;
}

export function SongItem({ song, index }: SongItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { currentSong, isPlaying, playSong } = useMusicStore();
  const isCurrentSong = currentSong === song.id;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(
        'grid grid-cols-[auto_2fr_1fr_auto_1fr] gap-4 items-center p-3 rounded-lg cursor-pointer group',
        isCurrentSong ? 'bg-red-900/20' : 'hover:bg-white/5'
      )}
      onClick={() => playSong(song.id)}
    >
      <span className="w-6 text-center text-sm text-gray-400 group-hover:hidden">
        {index + 1}
      </span>
      <Music2 
        size={16}
        className={clsx(
          'w-6 text-red-600 hidden',
          isCurrentSong && isPlaying ? 'animate-pulse' : '',
          'group-hover:block'
        )}
      />

      <div className="flex items-center gap-3">
        <img 
          src={song.coverUrl} 
          alt={song.title} 
          className="w-10 h-10 rounded"
        />
        <div>
          <h3 className="font-medium text-white">{song.title}</h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>

      <span className="text-sm text-gray-400">{song.plays}</span>
      <span className="text-sm text-gray-400">{song.duration}</span>
      <span className="text-sm text-gray-400">{song.album}</span>
    </div>
  );
}