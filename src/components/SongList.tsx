import { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { songs } from '../data/songs';
import { SongItem } from './SongItem';

export function SongList() {
  const [items, setItems] = useState(songs);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Popular</h2>
        <button className="text-gray-400 hover:text-white text-sm">See All</button>
      </div>

      <div className="grid grid-cols-[auto_2fr_1fr_auto_1fr] gap-4 text-xs text-gray-400 px-4 py-2 border-b border-white/10">
        <span>#</span>
        <span>TITLE</span>
        <span>PLAYING</span>
        <span>TIME</span>
        <span>ALBUM</span>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <SortableContext 
          items={items.map(song => song.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-1">
            {items.map((song, index) => (
              <SongItem 
                key={song.id}
                song={song}
                index={index}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}