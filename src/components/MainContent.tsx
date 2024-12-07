import { SongList } from './SongList';
import { NowPlaying } from './NowPlaying';

export function MainContent() {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <SongList />
      </div>
      <div className="w-80">
        <NowPlaying />
      </div>
    </div>
  );
}